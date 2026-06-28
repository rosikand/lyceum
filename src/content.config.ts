import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts live in src/content/blog/*.md(x). Each needs `title` and `date`.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    /** Set to true to keep a post out of the listing. */
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
