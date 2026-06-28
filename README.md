# Astro Academic Website Template

A minimal, content-driven personal website template for researchers, built with
[Astro](https://astro.build). A sticky navbar links three pages:

- **Home** (`/`) — your photo, bio, and social links.
- **Research** (`/research`) — publications, filterable by topic, with BibTeX.
- **Blog** (`/blog`) — a Markdown-powered post list, with per-post pages that
  have an auto-generated table of contents.

Everything is placeholder content — make it yours by editing a handful of files
(see [Make it yours](#make-it-yours)).

## Use this template

Click **“Use this template” → “Create a new repository”** at the top of this
repo's GitHub page (or just **Fork** it). Then:

```bash
git clone https://github.com/<you>/<your-repo>.git
cd <your-repo>
npm install
npm run dev
```

Edit the files in [Make it yours](#make-it-yours), and deploy with the included
GitHub Actions workflow (see [Deploying](#deploying-to-github-pages)).

## Quick start

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into ./dist
npm run preview  # preview the production build
```

Requires Node 18.20+ / 20.3+ / 22+.

## Make it yours

Everything you need to edit lives in a handful of places:

| What | Where |
| --- | --- |
| Your name, bio tagline, affiliation, analytics id | `src/data/site.ts` |
| Navbar links | `src/data/site.ts` → `nav` |
| Social / contact links (email, X, Scholar, GitHub, LinkedIn, CV) | `src/data/site.ts` → `social` |
| The bio paragraphs | `src/components/About.astro` |
| Publications (title, authors, venue, links, BibTeX, topics) | `src/data/publications.ts` |
| Blog posts | `src/content/blog/*.md` |
| Profile photo | `public/avatar.jpg` |
| Favicon | `public/favicon.png` |
| CV | `public/uploads/cv.pdf` |
| Colors & fonts | the `:root` variables at the top of `src/styles/global.css` |

### Pages & navigation

Each page is a file in `src/pages/` — `index.astro` (Home), `research.astro`,
`blog/index.astro`, and `blog/[...slug].astro` (individual posts). All pages
share the navbar and footer via `src/layouts/BaseLayout.astro`. To add a page,
create a new `.astro` file under `src/pages/` that uses `BaseLayout`, then add a
`{ label, href }` entry to `nav` in `src/data/site.ts`. The navbar highlights the
active link automatically (sub-routes like `/blog/<post>` highlight **Blog**).

### Publications

Edit the `publications` array in `src/data/publications.ts`. Each entry's
`topics` automatically become filter buttons, and `selected: true` includes a
paper under the default **Selected** view. Your own name (whatever you set as
`site.name`) is bolded automatically in each author list.

### Blog

Add a Markdown file to `src/content/blog/`. Frontmatter requires a `title` and a
`date`; `description` and `draft` are optional. The table of contents is built
automatically from your `##` and `###` headings.

## Deploying to GitHub Pages

This repo includes a ready-to-go workflow at `.github/workflows/deploy.yml`
(builds with `withastro/action` and publishes to Pages on every push to `main`).

1. Push your repo to GitHub.
2. In `astro.config.mjs`, set `site` to your URL, and set `base`:
   - **User/org site** (repo named `<you>.github.io`, served at
     `https://<you>.github.io/`): keep `base` as `/` (the default).
   - **Project site** (any repo name, served at
     `https://<you>.github.io/<repo>/`): set `base: "/<repo>/"`.
3. In your repo on GitHub: **Settings → Pages → Build and deployment → Source**,
   choose **GitHub Actions**.
4. Push to `main`; the workflow builds and deploys. Your site appears at the URL
   above (and in the Actions run summary).

For a custom domain, set `site` to `https://yourdomain.com`, keep `base` as `/`,
add a `public/CNAME` file containing the domain, and configure DNS.

## License

Released under the [MIT License](LICENSE) — free to use, fork, and adapt.
