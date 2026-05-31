/**
 * Decap CMS — GitHub OAuth callback (Vercel serverless)
 */
export default async function handler(req, res) {
	const { code, error, error_description } = req.query;

	if (error) {
		res.status(400).send(`GitHub OAuth error: ${error_description || error}`);
		return;
	}

	if (!code) {
		res.status(400).send('Missing authorization code');
		return;
	}

	const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
	const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
	const siteUrl = getSiteUrl();

	if (!clientId || !clientSecret) {
		res.status(500).send('缺少 OAuth 配置，请查看 ADMIN_SETUP.md');
		return;
	}

	const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			client_id: clientId,
			client_secret: clientSecret,
			code,
			redirect_uri: `${siteUrl}/api/callback`,
		}),
	});

	const data = await tokenResponse.json();

	if (data.error) {
		res.status(400).send(`Token error: ${data.error_description || data.error}`);
		return;
	}

	const token = data.access_token;
	const payload = JSON.stringify({ token, provider: 'github' });
	const safePayload = payload.replace(/</g, '\\u003c');

	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.send(`<!DOCTYPE html>
<html><body><script>
(function () {
  const message = 'authorization:github:success:${safePayload}';
  if (window.opener) {
    window.opener.postMessage(message, '*');
    window.close();
  } else {
    document.body.textContent = 'Login successful. You can close this tab and return to /admin/';
  }
})();
</script></body></html>`);
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
