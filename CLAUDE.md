# CLAUDE.md

Instructions pour Claude Code sur ce dépôt. Ce fichier est chargé automatiquement au début de chaque session.

## Projet

Portfolio personnel de Loïc Mennessier (React + Vite + Tailwind), en Master MIAGE et développeur Full Stack en alternance chez OCAPIAT. Tout le contenu du site est en **français**.

## Commandes

```bash
npm install      # dépendances
npm run dev      # serveur de dev Vite (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # sert le build localement
npm run lint     # ESLint
```

## Structure

- `src/App.jsx` : routeur (`react-router-dom`) avec les routes `/`, `/about`, `/resume`, `/contact`
- `src/pages/` : une page par route (`Home` assemble les sections)
- `src/components/layout/` : `Navbar` (fixe, menu mobile) et `Footer`
- `src/components/sections/` : `Hero`, `Projects`, `Skills` (sections de la page d'accueil)
- `src/index.css` : tokens de couleur en variables CSS (`--bg-primary`, `--accent-color`, etc.)
- `tailwind.config.js` : mappe ces variables vers des classes Tailwind (`bg-bg`, `text-muted`, `border-border`, ...)
- `public/TechIcons/*.svg` : icônes des technos, chargées par nom (`/TechIcons/${nom}.svg`) ; le nom dans le code doit correspondre exactement au nom du fichier
- `public/resume/` : CV en PDF (liens depuis la page Resume)
- `public/images/cute-batman.png` : logo de la navbar

## Conventions

- Couleurs : toujours passer par les tokens (`bg-bg`, `bg-card`, `text-text`, `text-muted`, `border-border`, `accent`). Pas de couleur en dur dans les composants.
- Animations : `framer-motion` (apparitions douces : fondu + léger décalage vertical).
- Icônes : `react-icons`, ou SVG dans `public/TechIcons/`.
- Le formulaire de contact poste vers Formspree (`action` dans `src/pages/Contact.jsx`) : ne pas changer les attributs `name` des champs.
- Ne pas modifier les textes factuels (parcours, dates, expériences, coordonnées) sans demander.

## Design

Le plugin **impeccable** est installé (`/impeccable ...`). Le contexte produit est dans `PRODUCT.md` et le système visuel dans `DESIGN.md` quand ils existent : les lire avant toute modification d'interface.
