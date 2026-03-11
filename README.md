# 🌐 Portfolio — Pierclaud BOUKI

> Refonte complète de mon portfolio personnel, migré depuis une version HTML/CSS/JS vanilla vers **Vue 3 + Vite + Vue Router**.  
> Disponible sur [pierclaud.fr](https://pierclaud.fr)

---

## 🛠 Stack technique

| Technologie | Rôle |
|-------------|------|
| Vue 3 | Framework JavaScript |
| Vite | Bundler / Dev server |
| Vue Router | Navigation entre les pages |
| CSS Custom | Styles + variables dark/light |
| Formspree | Gestion du formulaire de contact |

---

## 🔄 Pourquoi une refonte ?

L'ancienne version du portfolio était développée en HTML/CSS/JS vanilla.  
J'ai décidé de le reconstruire entièrement pour :

- Apprendre et pratiquer **Vue.js 3** en conditions réelles
- Avoir un code plus **maintenable et structuré** (composants réutilisables)
- Moderniser le design avec un **dark/light mode**, des animations et un effet **liquid glass**
- Améliorer l'expérience utilisateur sur mobile

---

## 🚀 Installation
```bash
# 1. Cloner le repo
git clone https://github.com/pierclaud7/portfolio.git

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Build pour la production
npm run build
```

---

## 📁 Structure du projet
```
pierclaud-portfolio/
├── public/
│   └── BKPB_Logo.png              # Logo du site + favicon
├── src/
│   ├── components/
│   │   ├── NavBar.vue              # Navigation + toggle dark/light mode
│   │   └── FooterBar.vue          # Pied de page + liens sociaux
│   ├── views/
│   │   ├── HomeView.vue           # Accueil : hero, parcours, compétences, certifications
│   │   ├── BtsSioView.vue         # Présentation du BTS SIO SLAM
│   │   ├── ProjetsView.vue        # Projets avec filtres par catégorie
│   │   ├── VeilleView.vue         # Veille technologique
│   │   ├── ContactView.vue        # Formulaire de contact (Formspree)
│   │   └── MentionsLegalesView.vue  # Mentions légales
│   ├── App.vue                    # Composant racine + gestion du thème
│   └── main.js                    # Configuration des routes + initialisation
├── index.html                     # Point d'entrée HTML
├── vite.config.js                 # Configuration Vite
├── package.json
└── .gitignore
```

---

## ✨ Fonctionnalités

- 🌙 **Dark / Light mode** — persisté en `localStorage`
- 📱 **Responsive** — adapté mobile, tablette et desktop
- 🔀 **Transitions de pages** — animation fluide entre les routes
- 🍔 **Menu burger** — navigation mobile
- 🎛 **Filtres projets** — par catégorie (Personnel, Scolaire, Professionnel)
- 📬 **Formulaire de contact** — branché sur Formspree
- ⚖️ **Mentions légales** — page dédiée

---

## 📬 Formulaire de contact

Le formulaire est configuré avec [Formspree](https://formspree.io).  
L'ID est défini dans `src/views/ContactView.vue` :
```js
await fetch('https://formspree.io/f/xojkedrj', { ... })
```

---

## 📄 Licence

© 2026 Pierclaud BOUKI — Tous droits réservés.