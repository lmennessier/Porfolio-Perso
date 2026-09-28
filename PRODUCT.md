# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Deux publics à égalité, qui évaluent le profil de Loïc (développeur Full Stack en alternance, Master MIAGE) :

- **Recruteurs / RH** : trient des candidatures, lisent vite, veulent comprendre le profil en quelques secondes.
- **Tech leads / développeurs** : évaluent la qualité technique, ouvrent les projets et le code sur GitHub.

Le site doit servir la lecture rapide sans sacrifier la profondeur technique.

## Product Purpose

Portfolio personnel de Loïc Mennessier, diplômé d'une Licence Informatique (Sorbonne Université), aujourd'hui en Master MIAGE et Développeur Full Stack en alternance chez OCAPIAT (Paris).

Succès : le visiteur **explore les projets** (action principale), puis consulte le CV ou prend contact.

## Operating Context

- Consulté depuis un lien dans une candidature, un CV ou un profil LinkedIn, sur desktop comme sur mobile.
- Pages : Accueil (hero, projets, compétences), À propos, CV (deux PDF téléchargeables + aperçu HTML), Contact (formulaire Formspree + coordonnées).
- Les projets renvoient vers les dépôts GitHub de `github.com/lmennessier`.

## Capabilities and Constraints

- Stack existante : React 18, Vite 5, Tailwind 3, framer-motion, react-router-dom, react-icons.
- Formulaire de contact posté vers Formspree : les attributs `name` des champs (`nom`, `email`, `sujet`, `message`) ne changent pas.
- Contenu en français.
- Ouvert : le projet « Portfolio V1 » pointe vers `lmennessier/mon-portfolio`, alors que ce dépôt s'appelle `Porfolio-Perso` ; son lien « live » est `#`.

## Brand Commitments

- **Sobriété minimaliste** : peu d'éléments, beaucoup d'espace, ton factuel. Confirmé par Loïc comme élément à garder.
- **Logo Batman** (`public/images/cute-batman.png`) : signature de la navbar, à conserver.
- Non contraints (Loïc ne les a pas retenus comme intouchables) : le fond noir monochrome et l'effet machine à écrire du hero.

## Evidence on Hand

- Trois projets réels : Portfolio V1 (React/Tailwind), Automate (Python/Jupyter, projet universitaire), Ecosys-Simu (simulation d'écosystème en C).
- Expériences : alternance Développeur Full Stack chez OCAPIAT, Paris (depuis 2026, missions non encore détaillées) ; stage Développeur Web & .NET chez AFNOR Groupe (2025) : migration d'un backoffice MVC C# vers Blazor, optimisation du temps de chargement, UI Blazor.
- Formation : Master MIAGE en alternance (depuis 2026, établissement non précisé) ; Licence Informatique, Sorbonne Université, 2023–2026.
- Compétence outillage : Claude Code.
- CV PDF : `public/resume/CV_ALTERNACE_MIAGE.pdf`, `public/resume/CV_ALTERNANCE_GL.pdf`.
- Icônes de technos : `public/TechIcons/*.svg`.
- Absents, à ne pas inventer : captures d'écran des projets, témoignages, chiffres de performance, autres expériences.

## Product Principles

1. Les projets d'abord : tout le parcours mène vers le travail réel et le code.
2. Lisible en 10 secondes par un recruteur, crédible en 2 minutes pour un développeur.
3. Rien d'inventé : chaque affirmation s'appuie sur un projet, une expérience ou un diplôme réel.
4. La retenue comme signature : la sobriété fait partie de l'identité, pas un manque de moyens.
