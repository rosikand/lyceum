// ---------------------------------------------------------------------------
// Site configuration — edit this file to make the website yours.
// Every value here is a placeholder. Replace the text, links, and asset paths
// with your own. Anything you don't want (e.g. a social link) can be removed.
// ---------------------------------------------------------------------------

export interface SocialLink {
  /** One of the supported icons, see src/components/SocialLinks.astro */
  type: "email" | "x" | "scholar" | "github" | "linkedin" | "cv";
  /** Email address (type: "email") or URL (everything else). */
  value: string;
  /** Accessible label / tooltip. */
  label: string;
}

export const site = {
  /** Your name — shown in the page title, the hero heading, and the footer. */
  name: "Your Name",

  /** Short tagline used for the <meta name="description"> tag (SEO / link previews). */
  description: "PhD student / researcher at Your University",

  /** Affiliation shown in the footer. */
  affiliation: "Your University",

  /** Profile photo in /public. Replace with your own square image. */
  avatar: "/avatar.jpg",

  /** Favicon in /public. */
  favicon: "/favicon.png",

  /**
   * Google Analytics 4 measurement id (e.g. "G-XXXXXXXXXX").
   * Leave empty to disable analytics entirely.
   */
  gaId: "",

  /**
   * Top navigation links, shown in the navbar in order.
   * Add/remove items or rename them freely; each href should match a page.
   */
  nav: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Blog", href: "/blog" },
  ],

  /**
   * Social / contact links shown under the avatar, in order.
   * Remove any you don't want; add more by extending the SocialLinks component.
   */
  social: [
    { type: "email", value: "you@example.com", label: "Email" },
    { type: "x", value: "https://x.com/yourhandle", label: "X" },
    {
      type: "scholar",
      value: "https://scholar.google.com/citations?user=XXXXXXXX",
      label: "Google Scholar",
    },
    { type: "github", value: "https://github.com/yourhandle", label: "GitHub" },
    { type: "cv", value: "/uploads/cv.pdf", label: "CV" },
  ] as SocialLink[],
} as const;
