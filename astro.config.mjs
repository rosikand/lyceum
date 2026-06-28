// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // If you deploy to https://<user>.github.io/ leave `site` as your domain and
  // `base` as "/". If you deploy to a project page (https://<user>.github.io/<repo>/),
  // set base: "/<repo>/".
  site: "https://example.com",
  // base: "/",
  trailingSlash: "ignore",
});
