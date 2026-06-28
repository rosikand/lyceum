// ---------------------------------------------------------------------------
// Publications — edit this list to show your own papers.
//
// Notes:
//   • The publication list is rendered in the order below.
//   • `selected: true` makes a paper show under the default "Selected" filter.
//   • Each string in `topics` becomes a filter button automatically.
//   • Your own name (site.name) is automatically bolded in the author list.
//   • Everything below is placeholder content — replace it.
// ---------------------------------------------------------------------------

export interface PubLink {
  label: string;
  href: string;
}

export interface Publication {
  /** A unique key, used for the BibTeX toggle element id. */
  key: string;
  title: string;
  /** Link for the title (paper / arXiv / proceedings). Optional. */
  url?: string;
  /** Full author list, e.g. "Jane Doe, Your Name, John Roe". */
  authors: string;
  /** Venue + year, e.g. "NeurIPS 2025". */
  venue: string;
  /** Optional award / note, e.g. "Spotlight 🌟" or "Best Paper". */
  award?: string;
  /** Show under the default "Selected" filter. */
  selected?: boolean;
  /** Topic tags — each becomes a filter button. */
  topics?: string[];
  /** Extra resource buttons (Code, Blog, Data, HF Collection, ...). */
  links?: PubLink[];
  /** Optional BibTeX entry — shown via a "BibTeX" toggle + copy button. */
  bibtex?: string;
}

export const publications: Publication[] = [
  {
    key: "placeholder-three",
    title: "A Third Placeholder Paper Title Goes Here",
    url: "https://arxiv.org/abs/0000.00000",
    authors: "Your Name, Co-Author One, Co-Author Two",
    venue: "Preprint 2026",
    selected: true,
    topics: ["Topic A"],
    links: [
      { label: "Code", href: "https://github.com/yourhandle/project" },
      { label: "Blog", href: "https://example.com/blog-post" },
    ],
    bibtex: `@misc{yourname-2026-third,
  title     = {A Third Placeholder Paper Title Goes Here},
  author    = {Your Name and Co-Author One and Co-Author Two},
  year      = {2026},
  url       = {https://arxiv.org/abs/0000.00000}
}`,
  },
  {
    key: "placeholder-two",
    title: "Second Placeholder Paper: An Interesting Subtitle",
    url: "https://arxiv.org/abs/0000.00001",
    authors: "Co-Author One, Your Name*, Co-Author Two*",
    venue: "ICML 2026",
    award: "Spotlight 🌟",
    selected: true,
    topics: ["Topic A", "Topic B"],
    links: [{ label: "Code", href: "https://github.com/yourhandle/project-two" }],
    bibtex: `@inproceedings{yourname-2026-second,
  title     = {Second Placeholder Paper: An Interesting Subtitle},
  author    = {Co-Author One and Your Name and Co-Author Two},
  booktitle = {International Conference on Machine Learning},
  year      = {2026}
}`,
  },
  {
    key: "placeholder-one",
    title: "An Earlier Placeholder Paper Title",
    url: "https://arxiv.org/abs/0000.00002",
    authors: "Your Name, Co-Author Three, Co-Author Four",
    venue: "NeurIPS 2025",
    selected: false,
    topics: ["Topic B"],
    links: [{ label: "Data", href: "https://github.com/yourhandle/dataset" }],
  },
];
