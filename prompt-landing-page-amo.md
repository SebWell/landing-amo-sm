# Prompt Claude Code — Landing Page AMO Sébastien Mignot

Copie ce prompt dans Claude Code pour générer la landing page prête à déployer.

---

## Prompt à coller dans Claude Code :

```
Je veux créer une landing page statique prête à déployer pour mon activité d'AMO (Assistance à Maîtrise d'Ouvrage) en promotion immobilière.

## Contexte
Je suis Sébastien Mignot, responsable de programmes senior avec +17 ans d'expérience (Nexity, Groupe Cardinal, consultant indépendant). Je lance mon activité d'AMO freelance depuis Arradon (56). J'ai une maquette React (JSX) validée que je veux transformer en landing page HTML/CSS/JS statique, prête à mettre en ligne.

## Le fichier source
Le fichier `offre-amo-v6.jsx` est joint à ce projet. Il contient toute la structure, le contenu et le style de la page. C'est ma référence absolue pour le contenu — ne change RIEN au texte, aux missions, aux données.

## Ce que je veux

### 1. Convertir en HTML/CSS/JS statique
- Un seul fichier `index.html` autonome (CSS et JS inline ou dans le même fichier)
- Pas de framework, pas de build, pas de dépendances
- Fonctionne en ouvrant le fichier directement dans un navigateur
- Le style doit être IDENTIQUE au composant React : monochrome blanc, style shadcn/ui, même palette de couleurs, mêmes espacements, même typographie système

### 2. Améliorations à apporter (sans changer le contenu)
- **Responsive** : parfaitement lisible sur mobile (< 480px), tablette et desktop
- **Smooth scroll** : navigation fluide vers les ancres (#missions, #contact)
- **Animations légères** : fade-in au scroll sur les sections, transition douce sur les accordéons
- **SEO de base** : balises meta (title, description, og:tags), structure sémantique (header, main, section, footer)
- **Favicon** : générer un favicon simple avec les initiales "SM"
- **Performance** : pas de requêtes externes (sauf éventuellement une Google Font si nécessaire pour améliorer la typo, sinon rester en system fonts)
- **Formulaire de contact** : remplacer le lien mailto par un petit formulaire (nom, email, message) qui envoie via Formspree ou équivalent (je configurerai l'endpoint après). En attendant, mettre un placeholder `https://formspree.io/f/VOTRE_ID`

### 3. Structure des fichiers
```
landing-amo/
├── index.html          (page complète, autonome)
├── og-image.png        (image OpenGraph 1200x630 — génère-la)
└── README.md           (instructions de déploiement)
```

### 4. Déploiement prévu
La page sera déployée sur Cloudflare Pages ou Netlify (drag & drop du dossier). Le README doit contenir les instructions pour les deux options.

### 5. Informations de contact à utiliser
- Nom : Sébastien Mignot
- Téléphone : 06 14 57 28 38
- Email : sebastien.mignot@gmail.com
- Localisation : Arradon (56)
- Titre SEO : "Sébastien Mignot — AMO Promotion Immobilière — Assistance à Maîtrise d'Ouvrage"
- Description SEO : "Assistance à Maîtrise d'Ouvrage pour promoteurs immobiliers. +17 ans d'expérience, +500 logements livrés. Conseil et assistance opérationnelle du montage à la GPA. Arradon, Bretagne."

## Contraintes impératives
- Le CONTENU du JSX est la référence. Ne modifie aucun texte, aucune mission, aucun chiffre.
- Le STYLE doit rester monochrome blanc/gris, minimaliste, professionnel. Pas de couleurs vives, pas de gradients, pas d'effets tape-à-l'œil.
- Les accordéons (missions par phase et FAQ) doivent fonctionner en JS vanilla.
- La page doit faire moins de 100 Ko au total (hors og-image).
```

---

## Le fichier JSX de référence (offre-amo-v6.jsx)

Colle le contenu du fichier `offre-amo-v6.jsx` à la suite du prompt ci-dessus, ou place-le dans le répertoire de travail avant de lancer Claude Code.

Le fichier est disponible dans tes outputs Claude : `offre-amo-v6.jsx`
