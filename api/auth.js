/**
 * Decap CMS — start GitHub OAuth flow (Vercel serverless)
 * Requires GITHUB_OAUTH_CLIENT_ID and SITE_URL in environment variables.
 */
export default function handler(req, res) {
	const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
	const siteUrl = getSiteUrl();

	if (!clientId) {
		res.status(500).send('缺少 GITHUB_OAUTH_CLIENT_ID，请查看 ADMIN_SETUP.md');
		return;
	}

	const redirectUri = `${siteUrl}/api/callback`;
	const scope = 'repo,user';
	const authUrl = new URL('https://github.com/login/oauth/authorize');
	authUrl.searchParams.set('client_id', clientId);
	authUrl.searchParams.set('redirect_uri', redirectUri);
	authUrl.searchParams.set('scope', scope);

	res.redirect(302, authUrl.toString());
}

function getSiteUrl() {
	if (process.env.SITE_URL) {
		return process.env.SITE_URL.replace(/\/$/, '');
	}
	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}
	return 'https://yixuan-own-blog.vercel.app';
}
