import crypto from 'node:crypto';

const SESSION_COOKIE = 'blog_comment_session';
const STATE_COOKIE = 'blog_comment_oauth_state';

function key() {
	const secret = process.env.COMMENT_SESSION_SECRET || process.env.GITHUB_OAUTH_CLIENT_SECRET;
	if (!secret) throw new Error('Missing COMMENT_SESSION_SECRET or GITHUB_OAUTH_CLIENT_SECRET');
	return crypto.createHash('sha256').update(secret).digest();
}

function encode(value) {
	return Buffer.from(value).toString('base64url');
}

function decode(value) {
	return Buffer.from(value, 'base64url');
}

export function seal(payload) {
	const iv = crypto.randomBytes(12);
	const cipher = crypto.createCipheriv('aes-256-gcm', key(), iv);
	const encrypted = Buffer.concat([cipher.update(JSON.stringify(payload), 'utf8'), cipher.final()]);
	return [encode(iv), encode(cipher.getAuthTag()), encode(encrypted)].join('.');
}

export function unseal(value) {
	if (!value) return null;
	try {
		const [iv, tag, encrypted] = value.split('.').map(decode);
		const decipher = crypto.createDecipheriv('aes-256-gcm', key(), iv);
		decipher.setAuthTag(tag);
		const payload = JSON.parse(
			Buffer.concat([decipher.update(encrypted), decipher.final()]).toString('utf8'),
		);
		if (payload.expiresAt && payload.expiresAt < Date.now()) return null;
		return payload;
	} catch {
		return null;
	}
}

export function parseCookies(req) {
	return Object.fromEntries(
		(req.headers.cookie || '')
			.split(';')
			.map((part) => part.trim())
			.filter(Boolean)
			.map((part) => {
				const index = part.indexOf('=');
				return [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
			}),
	);
}

export function setCookie(res, name, value, maxAge) {
	res.setHeader(
		'Set-Cookie',
		`${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`,
	);
}

export function clearCookie(res, name) {
	setCookie(res, name, '', 0);
}

export function getSession(req) {
	return unseal(parseCookies(req)[SESSION_COOKIE]);
}

export { SESSION_COOKIE, STATE_COOKIE };
