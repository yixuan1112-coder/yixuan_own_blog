import { getSession } from './_comment-session.js';

const REPOSITORY_OWNER = 'yixuan1112-coder';
const REPOSITORY_NAME = 'yixuan_own_blog';

export default async function handler(req, res) {
	res.setHeader('Cache-Control', 'no-store');
	const session = getSession(req);
	if (!session?.token || !session?.login) {
		res.status(401).json({ authenticated: false, commented: false });
		return;
	}

	const discussionNumber = Number(req.query.discussion);
	if (!Number.isSafeInteger(discussionNumber) || discussionNumber < 1) {
		res.status(400).json({
			authenticated: true,
			commented: false,
			login: session.login,
			error: 'Discussion is not ready yet.',
		});
		return;
	}

	try {
		const commented = await hasComment(session.token, session.login, discussionNumber);
		res.status(200).json({ authenticated: true, commented, login: session.login });
	} catch (error) {
		console.error('Comment verification failed', error);
		res.status(502).json({
			authenticated: true,
			commented: false,
			login: session.login,
			error: 'Could not verify the GitHub comment. Please try again.',
		});
	}
}

async function hasComment(token, login, discussionNumber) {
	let cursor = null;
	do {
		const response = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
				'User-Agent': 'yixuan-own-blog',
			},
			body: JSON.stringify({
				query: `query($owner: String!, $name: String!, $number: Int!, $cursor: String) {
					repository(owner: $owner, name: $name) {
						discussion(number: $number) {
							comments(first: 100, after: $cursor) {
								nodes { author { login } }
								pageInfo { hasNextPage endCursor }
							}
						}
					}
				}`,
				variables: {
					owner: REPOSITORY_OWNER,
					name: REPOSITORY_NAME,
					number: discussionNumber,
					cursor,
				},
			}),
		});
		const data = await response.json();
		if (!response.ok || data.errors) {
			throw new Error(data.errors?.[0]?.message || `GitHub returned ${response.status}`);
		}

		const comments = data.data?.repository?.discussion?.comments;
		if (!comments) return false;
		if (comments.nodes.some((comment) => comment.author?.login?.toLowerCase() === login.toLowerCase())) {
			return true;
		}
		if (!comments.pageInfo.hasNextPage) return false;
		cursor = comments.pageInfo.endCursor;
	} while (cursor);

	return false;
}
