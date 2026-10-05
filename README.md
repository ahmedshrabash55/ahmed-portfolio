# Ahmed Shrabash — Portfolio

A cybersecurity-focused personal portfolio built with React, Vite, Tailwind CSS, and Lucide icons.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This creates a `dist/` folder with the static site. Deploy that folder to any static host:

- **Vercel / Netlify**: connect the repo, build command `npm run build`, output directory `dist`.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use an action.
- Any static host: just upload the contents of `dist/`.

## Editing content

Almost everything on the site — your bio, skills, projects, timeline, certifications, and contact info — lives in one file:

```
src/data/content.js
```

Edit that file and the whole site updates. You generally won't need to touch the component files in `src/components/` unless you want to change layout or styling.

### Adding a certification

`certifications` in `src/data/content.js` holds your real NTI certificate. Add more entries the same way as you earn them:

```js
export const certifications = [
  {
    name: 'Certificate Name',
    org: 'Issuing Organization',
    date: '2026',
    link: 'https://verify-link.example.com',
  },
]
```

They'll appear automatically as cards in the Certifications section.

### Replacing placeholders

- **Profile photo**: in place — `public/ahmed-photo.jpg`, referenced via `profile.photo` in `src/data/content.js` and rendered in the hero. Replace the file (keep the same name, or update the path) to swap it later.
- **CV / Résumé**: in place — `public/Ahmed-Shrabash-CV.pdf`, referenced via `profile.cv`. The hero's "Download CV" button links straight to it. Replace the file (same name) to update it.
- **Project screenshots**: each project card in `src/components/Projects.jsx` has a placeholder block (dashed icon + "screenshot placeholder"). Replace it with an `<img>` tag once you have real screenshots, and add the image files to `public/projects/`.
- **Email**: `profile.email` in `src/data/content.js` is set to your real address and used for the mailto link in the Contact section.

## Project structure

```
src/
  components/   → one component per section (Hero, Projects, Skills, ...)
  data/
    content.js  → all editable site content
  App.jsx       → composes the page from components
  index.css     → Tailwind + custom motion/utility styles
tailwind.config.js → color, font, and spacing tokens
```

## Notes

- No certifications, GitHub links, live demos, CVE findings, or testimonials were invented — only what was provided is included, and empty sections are left as clearly labeled placeholders rather than filled with fake data.
- Motion is intentionally minimal: a single hero scan animation and standard hover/transition states, respecting `prefers-reduced-motion`.
