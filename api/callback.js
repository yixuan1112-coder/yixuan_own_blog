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
	const safeToken = JSON.stringify(token);

	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	// Decap CMS expects a two-step postMessage handshake (see decap-cms-lib-auth netlify-auth.js):
	// 1) popup sends "authorizing:github" → parent echoes it back
	// 2) popup then sends "authorization:github:success:{token,...}"
	res.send(`<!DOCTYPE html>
<html><body><script>
(function () {
  const token = ${safeToken};
  const data = JSON.stringify({ token: token, provider: 'github' });
  const successMsg = 'authorization:github:success:' + data;

  function sendToken(origin) {
    if (!window.opener) {
      document.body.textContent = '登录成功。请关闭此窗口并返回 /admin/ 页面。';
      return;
    }
    window.opener.postMessage(successMsg, origin || '*');
    window.close();
  }

  window.addEventListener('message', function (e) {
    if (e.data === 'authorizing:github') {
      sendToken(e.origin);
    }
  }, false);

  if (window.opener) {
    window.opener.postMessage('authorizing:github', '*');
  } else {
    document.body.textContent = '登录成功。请关闭此窗口并返回 /admin/ 页面。';
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
