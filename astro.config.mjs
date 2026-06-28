// @ts-check
import { defineConfig } from "astro/config";

// ---------------------------------------------------------------------------
// Where will this site live?
//   • User/org site  → repo named "<you>.github.io", served at the domain root.
//       set base = "/"            (and site = "https://<you>.github.io")
//   • Project site   → any repo name, served at "https://<you>.github.io/<repo>/".
//       set base = "/<repo>/"     (and site = "https://<you>.github.io")
//   • Custom domain  → set base = "/" and site = "https://yourdomain.com".
//
// This template is currently configured for the project repo below. Change
// `base` to match YOUR repo (or "/" for a user site / custom domain).
// ---------------------------------------------------------------------------
const site = "https://rosikand.github.io";
const base = "/lyceum/";

// Prefix root-relative URLs in Markdown (images, links) with `base` so blog
// content resolves under a subpath. .astro files use the withBase() helper.
function rehypeBaseUrls() {
  const prefix = base.replace(/\/$/, "");
  const fix = (node) => {
    if (node.type === "element" && node.properties) {
      for (const attr of ["src", "href"]) {
        const v = node.properties[attr];
        if (typeof v === "string" && v.startsWith("/") && !v.startsWith("//")) {
          node.properties[attr] = prefix + v;
        }
      }
    }
    if (Array.isArray(node.children)) node.children.forEach(fix);
  };
  return (tree) => fix(tree);
}

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  markdown: { rehypePlugins: [rehypeBaseUrls] },
});
