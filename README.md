# Portfolio Pierclaud BOUKI — Vue.js

Portfolio personnel refait avec **Vue 3 + Vite + Vue Router**.

## 🚀 Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Build pour la production
npm run build
```

## 📁 Structure

```
src/
├── components/
│   ├── NavBar.vue        # Navigation + toggle dark/light
│   └── FooterBar.vue     # Pied de page
├── views/
│   ├── HomeView.vue      # Accueil (hero, skills, parcours, certifs)
│   ├── BtsSioView.vue    # Présentation BTS SIO SLAM
│   ├── ProjetsView.vue   # Projets avec filtres
│   ├── VeilleView.vue    # Veille technologique
│   └── ContactView.vue   # Formulaire de contact
├── App.vue               # Root + gestion thème
└── main.js               # Routes + mount
```

## ✨ Fonctionnalités

- 🌙 Dark / Light mode (persisté en localStorage)
- 📱 Responsive mobile
- ⚡ Animations au scroll (IntersectionObserver)
- 🔀 Transitions de pages
- 🔍 Filtres sur la page Projets
- 🍔 Menu burger mobile

## 📬 Contact Form

Pour activer le formulaire, intègre [Formspree](https://formspree.io) ou [EmailJS](https://emailjs.com) dans `ContactView.vue`.
