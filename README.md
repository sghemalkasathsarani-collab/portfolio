# Portfolio — Hemalka Senarath Gamage

A single-page portfolio for a Civil Engineer (BIM, digital twins, Scan-to-BIM, bridge design), built with React 19, TypeScript, Vite and Tailwind CSS. It uses the same design system as [kd-27.github.io/portfolio](https://kd-27.github.io/portfolio/) with a teal accent.

Sections: Intro, Research & projects, Work experience, Education, Achievements & leadership, Skills, Contact.

## Editing content

All copy lives in `src/constants.ts`; no component changes needed for text updates.

- **Photo:** put a portrait in `public/` (e.g. `photo.jpg`) and set `ABOUT_DATA.photo: asset('photo.jpg')`. Until then her initials are shown.
- **CV:** put the PDF in `public/resume.pdf` and set `SOCIAL_LINKS.resume: asset('resume.pdf')`. The CV buttons only appear once this is set.
- **Project images:** add `image: asset('projects/bridge.jpg')` to any entry in `RESEARCH`.

## Development

```bash
npm install
npm run dev       # start the Vite dev server
npm run lint      # eslint
npm run build     # type-check + production build
npm run deploy    # build and push dist/ to the gh-pages branch
```

`vite.config.ts` uses a relative `base`, so the build works on GitHub Pages under any repo name. After the first `npm run deploy`, set the repo's Pages source to the `gh-pages` branch.
