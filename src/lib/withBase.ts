// Prefix an internal, root-relative path with the configured Astro `base`
// (import.meta.env.BASE_URL, e.g. "/" or "/lyceum/") so links and public assets
// resolve correctly whether the site is served at the domain root or a subpath.
//
// External URLs (http:, mailto:, tel:, protocol-relative //) and in-page
// anchors (#...) are returned unchanged.
const BASE = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE; // "" or "/lyceum"
  const p = path.startsWith("/") ? path : "/" + path;
  return base + p || "/";
}
