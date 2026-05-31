# Admin, Comments & CMS Setup

This site includes:

- **Blog posts** in `src/content/blog/`
- **Giscus comments** on blog articles
- **Decap CMS** at `/admin/` for writing in the browser

---

## 1. Giscus comments

1. Open your GitHub repo: `yixuan1112-coder/yixuan_own_blog`
2. Go to **Settings → General → Features** → enable **Discussions**
3. Visit [https://giscus.app](https://giscus.app)
4. Enter your repo, pick language **English**, category **General** (or create one)
5. Copy **Repository ID** and **Category ID**
6. In **Vercel** → your project → **Settings → Environment Variables**, add:
   - `PUBLIC_GISCUS_REPO_ID` = (from giscus.app)
   - `PUBLIC_GISCUS_CATEGORY_ID` = (from giscus.app)
7. Redeploy the site

Comments will appear at the bottom of each blog post.

---

## 2. Decap CMS (`/admin/`)

### Create a GitHub OAuth App

1. GitHub → **Settings → Developer settings → OAuth Apps → New OAuth App**
2. **Application name:** `Yixuan Blog CMS`
3. **Homepage URL:** `https://yixuan-own-blog.vercel.app`
4. **Authorization callback URL:** `https://yixuan-own-blog.vercel.app/api/callback`
5. Create the app and copy **Client ID** and generate a **Client Secret**

### Add environment variables on Vercel

| Variable | Value |
|----------|--------|
| `GITHUB_OAUTH_CLIENT_ID` | Client ID from OAuth App |
| `GITHUB_OAUTH_CLIENT_SECRET` | Client Secret |
| `SITE_URL` | `https://yixuan-own-blog.vercel.app` |

Redeploy after saving.

### Use the admin panel

1. Open `https://yixuan-own-blog.vercel.app/admin/`
2. Click **Login with GitHub**
3. Create or edit blog posts
4. Click **Publish** — changes are committed to GitHub and Vercel redeploys

### Embed videos in posts

In the markdown body, paste an embed code, for example:

```html
<iframe width="100%" height="400" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

For Bilibili, use the embed URL from the share menu.

---

## 3. Write posts without CMS (optional)

Create a file in `src/content/blog/my-post.md`:

```markdown
---
title: 'My Post Title'
description: 'Short summary'
pubDate: 'May 31 2026'
---

Your content here.
```

Then `git add`, `commit`, `push`.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Comments not showing | Add Giscus env vars and enable Discussions |
| `/admin` login fails | Check OAuth callback URL and Vercel env vars |
| Build fails after CMS upload | Ensure `pubDate` format is like `May 31 2026` |
| Images not showing | Upload via CMS or place files in `src/assets/blog/` |
