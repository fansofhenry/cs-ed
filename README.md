# Henry Fan — CS Education Research Portfolio

A static research portfolio for Henry Fan: an independent CS education researcher based at the Foothill–De Anza Community College District, mentored by Jeff Anderson, and applying to PhD programs in CS education and the learning sciences for Fall 2026.

**Live site:** <https://fansofhenry.github.io/cs-ed/>

## Research focus

Structural features of introductory CS courses that predict help-seeking, persistence, and belonging — with a focus on community college students. The research program combines qualitative interview methods (Seymour & Hunter replication at community colleges), NLP analysis of course materials, learning analytics on LMS data, and computational tool-building for instructional auditing.

## Site structure

| File | Purpose |
| --- | --- |
| `index.html` | Homepage with bio, research-agenda-at-a-glance grid, and top projects |
| `research.html` | Four research questions + roadmap |
| `projects.html` | Five empirical projects (P1–P5) with full designs |
| `teaching.html` | Curriculum designs and teaching philosophy |
| `writing.html` | Research statement, working papers, 30-entry annotated reading list |
| `tools.html` | Hub for the three interactive tools |
| `tool-curriculum-graph.html` | Interactive typed-dependency curriculum graph with live structural stats |
| `tool-pedagogical-debt.html` | Rule-based syllabus scorer across four dimensions with inline highlights |
| `tool-mvc.html` | Greedy MVC step-through with brute-force optimum comparison |
| `methods.html` | Methods appendix: worked annotation, interview guide, κ calculation, power analysis, threats to validity |
| `background.html` | Origin story and contact |
| `applied.html` | ProjectBridge redesign and research-informed design artifacts |
| `style.css` | Shared editorial stylesheet |
| `script.js` | Progressive enhancement for mobile nav + active-page highlighting |

## Document status

The research statement, teaching philosophy, CV, and the three working papers
(Typed Dependency Grammar, Pedagogical Debt, Minimum Viable Curriculum) are
all drafts in preparation. They are not published from this repository —
the site marks them as "draft · available on request" and points to
`henry@henryfan.org`. Don't re-add PDF links until the documents are
finalized and committed.

## Local preview

The site is plain HTML/CSS/JS with no build step. Any static file server will do:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## Design principles

- **Factually accurate.** The site makes no institutional-affiliation claim it cannot verify; project status labels (`Proposed`, `In Progress`, `Completed`) are honest.
- **Editorial typography.** Newsreader serif for body, DM Sans for navigation and metadata. One column, generous leading, no hero images — the argument is the content.
- **Accessible by default.** Skip-to-content link, `:focus-visible` styling, `prefers-reduced-motion`, `aria-expanded` on the mobile nav toggle, no-JS fallback for the navigation, and semantic landmarks on every page.
- **No tracking.** No analytics, no trackers, no third-party embeds beyond Google Fonts (preconnected).

## Deployment

Deployed via GitHub Pages from the `main` branch. See `.github/workflows/static.yml`.

## License

All papers, code, and curriculum materials on this site are released open-source. Prose and research designs are © 2026 Henry Fan; you may quote with attribution.
