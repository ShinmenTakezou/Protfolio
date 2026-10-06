# JI-won Next.js Portfolio

This is a server-rendered portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit content

- `data/site.ts` controls profile text, navigation, interests, career paths, prompts, and social links.
- `data/projects.ts` controls project cards.
- `data/achievements.ts` controls achievements and experience notes.
- `app/*/page.tsx` controls each page layout.
- `app/globals.css` controls Tailwind theme details and reusable visual effects.

## Browser editing

The `/admin` page lets you add draft projects and achievements in your browser with local storage. Those edits are local to that device. For permanent deployed edits, copy the final text into the files inside `data/`.
