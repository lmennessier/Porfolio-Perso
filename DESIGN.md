---
name: Loïc Mennessier, portfolio
description: Le parcours d'un développeur tracé comme une ligne de métro, sur papier de plan.
colors:
  line: "#5b3fd9"
  line-deep: "#4629b8"
  ground: "#f4f4f1"
  station: "#ffffff"
  ink: "#161616"
  ink-2: "#5c5c57"
  rule: "#d6d6d0"
typography:
  display:
    fontFamily: "Overpass Variable, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Overpass Variable, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Overpass Variable, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  subtitle:
    fontFamily: "Overpass Variable, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 2rem
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Overpass Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Overpass Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25rem
    fontFeature: "tnum"
  sign:
    fontFamily: "Overpass Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1.25
rounded:
  focus: "2px"
  plate: "6px"
  panel: "8px"
  pill: "9999px"
spacing:
  gutter: "24px"
  container: "72rem"
  station-gap: "48px"
  section-y: "96px"
  page-top: "176px"
components:
  button-line:
    backgroundColor: "{colors.line}"
    textColor: "{colors.station}"
    rounded: "{rounded.pill}"
    padding: "13px 24px 11px"
  button-line-hover:
    backgroundColor: "{colors.line-deep}"
    textColor: "{colors.station}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "11px 22px 9px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.station}"
  sign:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.station}"
    typography: "{typography.sign}"
    rounded: "{rounded.plate}"
    padding: "10px 16px 8px"
  correspondence:
    backgroundColor: "{colors.station}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "5px 12px 3px 6px"
  correspondence-lg:
    backgroundColor: "{colors.station}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 18px 6px 8px"
  field:
    backgroundColor: "{colors.station}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "14px 16px 12px"
  panel:
    backgroundColor: "{colors.station}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "48px"
  terminus-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.station}"
    rounded: "{rounded.panel}"
    padding: "64px 56px"
  station-dot:
    backgroundColor: "{colors.station}"
    rounded: "{rounded.pill}"
    size: "20px"
  station-dot-lit:
    backgroundColor: "{colors.line}"
    rounded: "{rounded.pill}"
    size: "20px"
---

# Design System: Loïc Mennessier, portfolio

## Overview

**Creative North Star: "Le plan de ligne"**

Le site est un plan de ligne de métro parisien imprimé sur papier clair. Le parcours de Loïc est une ligne unique, violette, qui relie des stations : les étapes (Sorbonne, AFNOR, terminus Master) sur une ligne horizontale en haut de l'accueil, puis les projets sur une ligne verticale. Chaque station porte une seule information mise en avant et une anatomie fixe. La navigation elle-même est un mini-plan de ligne où chaque page est une station.

Le système est plat, sobre et typographique. Tout le contenu est à l'encre sur fond papier ; la seule couleur est celle de la ligne, et elle ne sert qu'à la ligne, aux stations desservies et à ce qui se clique. La signalétique donne le reste du vocabulaire : une plaque de direction encre à texte blanc en capitales, des pastilles de correspondance pour les technologies, une fonte de signalisation routière (Overpass) en graisses lourdes à l'approche serrée. Beaucoup d'espace, peu d'éléments, aucun effet de surface.

Le monde remplace l'ancien look sombre monochrome : fond clair, une couleur de ligne, pas de grille de cartes identiques.

**Key Characteristics:**
- Fond papier de plan, encre quasi noire, un seul violet de ligne.
- La ligne et ses stations sont le motif structurant, à l'horizontale comme à la verticale.
- Overpass Variable auto-hébergée, titres en 800 avec approche négative, chiffres tabulaires pour les dates.
- Formes en pilule (boutons, pastilles, stations), plaques et champs légèrement arrondis.
- Aucune ombre ; la profondeur vient de l'encre pleine et des filets.

## Colors

Une palette de plan imprimé : papier, encre, gris de légende, filets, et une seule couleur de ligne.

### Primary
- **Violet de ligne** (`line`) : le tracé de la ligne, le remplissage des stations desservies ou survolées, les boutons principaux, les liens de projet et de contact, la sélection de texte et le curseur de saisie. Tiré du logo Batman.
- **Violet de ligne profond** (`line-deep`) : uniquement l'état de survol du violet de ligne (boutons et liens).

### Neutral
- **Papier de plan** (`ground`) : fond de toutes les pages, de la navbar et de la piste de la barre de défilement.
- **Blanc de station** (`station`) : intérieur des pastilles de station, fond des pastilles de correspondance, des champs et des panneaux (aperçu du CV, formulaire). Aussi le texte sur encre et sur violet.
- **Encre** (`ink`) : texte principal, cercle des stations non interactives, plaque de direction, bande de terminus, anneau de focus clavier.
- **Gris de légende** (`ink-2`) : texte secondaire (descriptions, dates, lieux, libellés de navigation inactifs, placeholders), survol des champs.
- **Filet** (`rule`) : séparateurs de listes, bordure de la navbar au défilement, bordures des panneaux et des pastilles de correspondance.

### Named Rules
**The Single Line Rule.** Il n'existe qu'une couleur de ligne. Le violet est réservé au tracé, aux stations desservies et à ce qui se clique ; jamais sur un titre, un fond de section ou une décoration.

**The Lit Station Rule.** Une station est blanche cerclée ; elle ne se remplit de violet que lorsque la ligne l'a desservie (étapes passées du parcours, page active) ou au survol et au focus d'une station interactive.

## Typography

**Display Font:** Overpass Variable (avec `system-ui, sans-serif`)
**Body Font:** Overpass Variable (même famille)

**Character:** Une seule famille, issue de la signalisation routière : lourde et serrée pour les titres, calme et aérée pour le texte courant. La hiérarchie vient de la graisse et de la taille, pas d'une seconde fonte.

### Hierarchy
- **Display** (800, `clamp(2.75rem, 7vw, 5.75rem)`, 0.95) : le nom sur l'accueil, une seule fois.
- **Headline** (800, `clamp(2.5rem, 6vw, 4.5rem)`, 0.95) : le titre de page (À propos, CV, Contact).
- **Title** (800, 2.25rem mobile puis 3rem, approche -0.03em) : titres de section (Projets sélectionnés, Compétences) et titre de la bande de terminus (1.875rem à 2.25rem).
- **Subtitle** (800, 1.5rem puis 1.75rem sur les projets, approche -0.025em) : nom de projet, titres de rubrique du CV ; les noms de station du parcours et les postes du CV descendent à 1.25rem en 700.
- **Body** (400, 1.125rem, interligne 1.625) : descriptions et paragraphes en gris de légende, limités à 65ch (`max-w-prose` ou `65ch`).
- **Label** (600, 0.875rem, chiffres tabulaires) : dates, libellés de coordonnées, stations de la navbar. Les libellés de formulaire passent en 700.
- **Sign** (800, 0.875rem puis 1.125rem, capitales) : la plaque de direction ; son préfixe « Direction » est en 500 à 75 % d'opacité.

### Named Rules
**The Plate Capitals Rule.** Les capitales appartiennent à la plaque de direction. Aucun autre texte n'est mis en capitales.

**The Tabular Time Rule.** Les années et périodes sont en chiffres tabulaires (`tabular-nums`), comme des horaires.

## Layout

Un conteneur unique de 72rem (`max-w-6xl`) centré, avec une gouttière latérale de 24px. La navbar fixe fait 80px de haut ; les pages intérieures commencent à 144px (mobile) puis 176px (desktop) du haut, l'accueil à 128px puis 112px pour que la ligne des projets apparaisse dès le premier écran desktop. Les sections respirent de 64px (mobile) à 96px (desktop) verticalement ; le pied de page est séparé par 96px et un filet.

La ligne verticale (`line-list`) porte les listes-stations : pastille de 20px, tracé de 6px, 48px entre stations (56px pour les projets sur desktop). La variante compacte (menu mobile) passe à 16px, 4px et 20px. Sur desktop, le parcours du hero est une grille de trois colonnes le long d'une ligne horizontale pleine largeur : départ aligné à gauche, milieu centré, terminus à droite. Sous 768px, la même ligne bascule à la verticale.

Les pages intérieures utilisent des grilles asymétriques à deux colonnes (texte + colonne étroite de 20rem pour À propos, 5/7 pour Contact, 2/1 dans l'aperçu du CV). La légende des compétences est une grille de 2, 3 puis 5 colonnes, séparée par un filet supérieur.

## Elevation & Depth

Le système est entièrement plat : aucune ombre portée nulle part. La profondeur est tonale et linéaire : le blanc de station se détache du papier, l'encre pleine (plaque, bande de terminus) marque les points d'arrêt forts, et les filets de 1px structurent les listes. La navbar ne prend qu'un filet inférieur au défilement.

### Named Rules
**The Flat Plan Rule.** Un plan de ligne est imprimé. Pas d'ombre, pas de flou, pas de dégradé ; un changement d'état se lit par un changement de remplissage ou de couleur.

## Shapes

Trois familles de formes. La pilule (9999px) pour tout ce qui appartient à la ligne ou s'active : stations, boutons, pastilles de correspondance, puces de liste. La plaque légèrement arrondie (6px) pour la plaque de direction et les champs de saisie. Le panneau doux (8px) pour les grands conteneurs : aperçu du CV, formulaire, bande de terminus. Les stations sont des cercles blancs à anneau épais (environ deux tiers de l'épaisseur du tracé) ; le terminus est un cercle un peu plus grand à anneau plus épais. Les bordures sont soit des filets de 1px, soit des anneaux pleins de 2px (bouton fantôme) à 5px (terminus).

## Components

### Buttons
Des pilules franches, en graisse 700, avec un padding optiquement décalé (plus haut en haut) pour compenser la ligne de base d'Overpass.
- **Shape:** pilule (9999px).
- **Primary (ligne):** fond violet de ligne, texte blanc, 13px 24px 11px. Sert l'action principale d'un écran (Voir les projets, Télécharger le CV, Envoyer, Me contacter).
- **Hover / Focus:** passage au violet profond en 200ms sur `cubic-bezier(0.16, 1, 0.3, 1)` ; focus clavier par l'anneau encre global.
- **Ghost:** anneau encre de 2px, texte encre, fond transparent ; au survol, remplissage encre et texte blanc. Action secondaire à côté d'un bouton de ligne.

### Chips (pastilles de correspondance)
- **Style:** fond blanc de station, filet de 1px, pilule, picto de techno à gauche (18px), texte 0.8125rem en 600.
- **Grande variante:** picto de 26px, texte 1rem en 700 ; utilisée pour la légende des compétences.
- **State:** aucune ; les pastilles sont informatives, jamais cliquables.

### Cards / Containers
- **Corner Style:** panneau doux (8px).
- **Background:** blanc de station sur papier, ou encre pleine pour la bande de terminus.
- **Shadow Strategy:** aucune (voir Elevation & Depth).
- **Border:** filet de 1px pour les panneaux blancs ; aucune pour la bande encre.
- **Internal Padding:** 32px à 48px pour l'aperçu du CV, 24px à 40px pour le formulaire, 48–64px vertical pour la bande de terminus.

### Inputs / Fields
- **Style:** fond blanc, contour `rule-strong` (#8a8a84, ≥ 3:1 sur blanc) de 1px, arrondi plaque (6px), padding 14px 16px 12px, placeholder en gris de légende, libellé au-dessus en 0.875rem 700.
- **Hover:** contour gris de légende.
- **Focus:** contour et contour extérieur de 2px en violet de ligne ; c'est la seule exception à l'anneau encre.

### Navigation
- **Style:** navbar fixe sur fond papier, 80px, logo Batman et nom en 800 à gauche.
- **Desktop:** un mini-plan de ligne horizontal : tracé violet de 3px, une station de 13px à anneau violet par page, libellé en dessous. Page active : station pleine et libellé encre en 700 ; inactive : libellé gris en 500, station qui se remplit au survol. Lien GitHub à droite, encre puis violet au survol.
- **Scroll:** filet inférieur qui apparaît dès 8px de défilement.
- **Mobile:** menu déroulant qui reprend la ligne verticale compacte, avec stations interactives.

### Ligne de stations (signature)
La liste-station verticale : un tracé violet continu du centre de la première pastille au centre de la dernière, chaque élément de liste portant sa pastille. Variantes : interactive (anneau violet, remplissage au survol et au focus de l'élément), desservie (pleine violette), terminus (plus grande, anneau encre épais). Au chargement de l'accueil, la ligne horizontale du parcours se trace une fois (1.1s, ease-out-expo, après 0.2s) et ses stations passées s'allument en séquence ; avec `prefers-reduced-motion`, tout est affiché d'emblée.

### Plaque de direction (signature)
Fond encre, texte blanc en capitales, arrondi plaque (6px), padding 10px 16px 8px ; préfixe « Direction » atténué, destination en 800. Une seule par écran.

## Do's and Don'ts

### Do:
- **Do** poser toute liste d'étapes ou de projets sur la ligne de stations plutôt que dans une grille de cartes.
- **Do** réserver le violet de ligne au tracé, aux stations desservies et aux éléments cliquables (The Single Line Rule).
- **Do** donner à chaque station une anatomie fixe et une seule information mise en avant : nom, description, stack, lien.
- **Do** garder l'anneau de focus clavier en encre, 3px, décalé de 3px : l'élément le plus contrasté de la page.
- **Do** utiliser `cubic-bezier(0.16, 1, 0.3, 1)` à 200ms pour les changements d'état, et respecter `prefers-reduced-motion`.
- **Do** passer par les jetons (`ground`, `station`, `ink`, `ink-2`, `rule`, `line`, `line-deep`) plutôt que par des valeurs en dur.

### Don't:
- **Don't** introduire une seconde couleur d'accent ou de ligne.
- **Don't** ajouter d'ombre, de flou, de dégradé ou d'effet gadget (The Flat Plan Rule).
- **Don't** mettre en capitales autre chose que la plaque de direction.
- **Don't** rendre cliquable une pastille de correspondance, ni y mettre du violet.
- **Don't** revenir au fond sombre monochrome de l'ancienne version.
