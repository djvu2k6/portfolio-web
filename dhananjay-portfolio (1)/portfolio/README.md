# Dhananjay Mohan — Portfolio

Next.js + TypeScript + Tailwind. "Notebook margins" design system — paper tones,
one handwritten accent font for headings/annotations, hairline rules instead of
cards, and a physics-based hanging ID card (Lanyard, from react-bits) in the hero.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add your real photo (important)

The hero card currently falls back to the default react-bits texture because
it has no real front/back images yet. To put your photo on it:

1. Drop your photo into `public/avatar-front.jpg` (portrait orientation works
   best — the card face is roughly 4:5).
2. Optional: drop a second image into `public/avatar-back.jpg` for the back
   face (a logo, a drawing, whatever you want on the flip side). If you skip
   this, the back keeps the default texture.
3. That's it — `components/Hero.tsx` already points `frontImage`/`backImage`
   at those paths. Refresh and drag the card to see both sides.

If you want the back face to show nothing custom, just delete the
`backImage="/avatar-back.jpg"` line in `Hero.tsx`.

## What's already wired up

- `card.glb` and `lanyard.png` (the physical card model + band texture) are
  already in `/public`, pulled from the react-bits repo — no extra download
  needed.
- The card material is toned down from the stock react-bits version (less
  metalness/clearcoat, ink-tinted lighting) so it reads as part of the paper
  aesthetic instead of a glossy conference badge.
- Drag-to-swing physics is intact, and the canvas scales resolution/timestep
  down on mobile for performance.

## Deploy

Push to GitHub, import into Vercel, done — no special config needed. The
`three`/`@react-three/*` versions in `package.json` are pinned to versions
that are known to work together; if you bump them later and hit a
`BatchedMesh is not exported from 'three'` error, it means `three` drifted
out of sync with `@react-three/drei` again — pin them back to compatible
versions.

## Structure

```
app/
  layout.tsx      — fonts (Inter + Caveat), metadata/OG tags
  page.tsx         — assembles all sections
  globals.css      — paper grain, underline-draw hover, base tokens
components/
  Nav.tsx
  Hero.tsx         — headline + the Lanyard card
  Lanyard.tsx       — the 3D component itself
  About.tsx
  Work.tsx          — selected work, data-driven (edit the `projects` array)
  OpenSource.tsx
  Currently.tsx
  Contact.tsx       — links + footer
```

To add or edit a project, just edit the `projects` array at the top of
`components/Work.tsx` — nothing else needs to change.
