import crypto from 'node:crypto';
import { seal, setCookie, STATE_COOKIE } from './_comment-session.js';

export default function handler(req, res) {
	const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
	if (!clientId) {
		res.status(500).send('GitHub OAuth is not configured.');
		return;
	}

	const returnTo = safeReturnTo(req.query.return_to);
	const nonce = crypto.randomBytes(24).toString('base64url');
	const state = seal({ nonce, returnTo, expiresAt: Date.now() + 10 * 60 * 1000 });
	setCookie(res, STATE_COOKIE, state, 10 * 60);

	const authUrl = new URL('https://github.com/login/oauth/authorize');
	authUrl.searchParams.set('client_id', clientId);
	authUrl.searchParams.set('redirect_uri', `${getSiteUrl()}/api/callback`);
	authUrl.searchParams.set('scope', 'read:user');
	authUrl.searchParams.set('state', nonce);
	res.redirect(302, authUrl.toString());
}

function safeReturnTo(value) {
	return typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')
		? value
		: '/blog/';
}

function getSiteUrl() {
	if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, '');
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
	return 'https://yixuan-own-blog.vercel.app';
}
