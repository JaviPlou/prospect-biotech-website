# Prospect Biotech website

A responsive English website with separate Prospect Bioprocess and Prospect Health sections, focused on extracellular stress metabolites and SERS. Scientific references are limited to peer-reviewed publications co-authored by Javier Plou.

## Preview and build

```sh
npm ci
npm start
```

Production build:

```sh
npm run build
```

The React build is written to `build/`. Relative asset paths support deployments under a subdirectory.

## Static website

`index.html` and `Prospect Biotech.html` are generated from the same React component and CSS. Open either file directly, with the `assets/` folder alongside it, or serve the repository root. Static navigation and metabolite disclosures use native HTML and work without JavaScript. No third-party font, animation or styling service is required.

After editing the source, regenerate both static files:

```sh
npm run build:static
```

Edit `src/App.js` for content and components; edit `src/site.css` for layout and appearance. Do not edit the generated HTML independently. `scripts/build-static.cjs` also synchronizes the existing logo into `public/assets/` for the React build.

## Content and evidence

- Bioprocess: research and development of culture and biomanufacturing monitoring.
- Health: biological models, tumor secretomes and experimental treatment response research.
- Hypoxanthine is the main stress-associated example. Adenine-related profiles add context; MTA is presented as a metabolic communication example, not a universal stress marker.
- Scientific findings are described within the experimental models studied. The site does not claim established commercial assay performance, validated diagnostics, universal sensitivity advantages or automatic process control.
- The hero figure and pathway drawings are original conceptual illustrations, not experimental data.
- Contact actions open an email client at the business address already present in the repository. No form backend or automatic email sending is added.

Sources and statement boundaries are documented in `SCIENCE.md`.
