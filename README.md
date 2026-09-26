# Introduction to Research Data Analysis — Workshop Deck

A 120-minute interactive Quarto RevealJS workshop for Public Health Resident
Doctors / Senior Registrars preparing Part II dissertations (NPMCN/WACP).

## Folder structure

```
research-data-analysis-workshop/
├── index.qmd
├── custom.scss
├── scripts/
│   ├── interactions.js
│   └── interactions.html
├── data/
│   └── hypertension_demo.csv   (auto-generated on first render)
├── images/
│   └── logo.png                (add your own institutional logo, or remove `logo:` from YAML)
├── references.bib
├── resources/
│   ├── analysis-cheatsheet.qmd
│   └── cheatsheet.css          (optional print styling)
└── README.md
```

## Prerequisites

- [Quarto](https://quarto.org) ≥ 1.4
- R ≥ 4.2 with packages: `tidyverse`, `gt`, `scales`, `patchwork`
- A Mermaid-capable Quarto install (bundled by default with Quarto ≥ 1.3)

Install R packages:

```r
install.packages(c("tidyverse", "gt", "scales", "patchwork"))
```

## Rendering

```bash
quarto render index.qmd
```

This regenerates `data/hypertension_demo.csv` (the simulated dataset) and
produces `index.html`.

## Presenting live (Microsoft Teams)

1. Open `index.html` in a browser, share that browser tab/window in Teams (not the whole desktop, to avoid the RevealJS chalkboard/laser flicker).
2. Use `chalkboard: true` — press **B** to toggle chalkboard, **C** for laser pointer.
3. Trigger Teams polls manually at the marked `POLL:` cues — the deck does not auto-launch Teams polls.
4. Speaker notes: press **S** to open the speaker view in a second window/monitor.
5. Full-screen "big idea" slides work well as natural pause points for reactions (👍 / ✋).

## Notes on content

- The `hypertension_demo.csv` dataset (n = 742) is **entirely simulated** — state this explicitly to participants (a notes cue is included at first use).
- The reference site named in the original brief (a Shiny app) could not be reviewed when this deck was built; content was developed from the supplied agenda and standard biostatistics/epidemiology teaching practice instead. Recommend a manual review pass against that site before first delivery, and adjust examples/terminology to match your institution's house style if needed.
- Formative assessment slides follow **Question → Commit → Reveal → Explain**, mostly via RevealJS fragments (`::: {.fragment}`) which work in any browser without JavaScript. A small number of slides also use the `quiz-option`/`checkAnswer()` JS helper in `interactions.js` for a clickable self-check feel — these degrade gracefully to plain text if JS is disabled.

## Customization

- Palette, fonts, and quiz styling live in `custom.scss`.
- Add/remove interactive slides via the `.fragment` / `quiz-option` patterns already used throughout `index.qmd`.
- Swap `images/logo.png` for your institution's logo, or delete the `logo:` line in the YAML header if you don't have one.
