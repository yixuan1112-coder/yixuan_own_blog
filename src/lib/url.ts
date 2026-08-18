/**
 * Prefix an absolute site path with Astro's configured `base`.
 *
 * On Vercel the base is '/', so url('/blog/') === '/blog/' and output is
 * unchanged. On GitHub Pages the site is served from a subdirectory, so the
 * same call yields '/yixuan_own_blog/blog/'.
 */
const BASE = import.meta.env.BASE_URL;

export function url(path: string): string {
	if (!path.startsWith('/')) return path;
	const prefix = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
	return `${prefix}${path}`;
}
