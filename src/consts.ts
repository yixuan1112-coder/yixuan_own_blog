// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Yixuan's website";
export const SITE_DESCRIPTION = 'Personal website and blog of Yixuan Xie — projects, updates, and contact info.';

/** Giscus comments — fill IDs via .env or https://giscus.app (repo must have Discussions enabled) */
export const GISCUS = {
	repo: 'yixuan1112-coder/yixuan_own_blog',
	repoId: import.meta.env.PUBLIC_GISCUS_REPO_ID ?? '',
	category: 'General',
	categoryId: import.meta.env.PUBLIC_GISCUS_CATEGORY_ID ?? '',
	mapping: 'pathname',
	theme: 'preferred_color_scheme',
	lang: 'en',
};
