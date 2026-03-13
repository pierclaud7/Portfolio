<template>
  <div class="page">

    <!-- HERO -->
    <section class="page-hero">
      <div class="hero-inner">
        <h1 class="page-title">Mes projets</h1>
        <p class="page-desc">Voici tous les projets que j'ai réalisés au cours de mon expérience en développement web et logiciel.</p>
      </div>
    </section>

    <div class="page-content">

      <!-- FILTRES -->
      <div class="filters">
        <button v-for="f in filters" :key="f" class="filter-btn" :class="{ active: activeFilter === f }" @click="activeFilter = f">
          {{ f }}
        </button>
      </div>

      <!-- GRILLE -->
      <Transition name="fade" mode="out-in">
        <div class="projects-grid" :key="activeFilter">
          <div v-for="project in filteredProjects" :key="project.title" class="project-card">

            <!-- Image -->
            <div class="card-image">
              <img :src="project.image" :alt="project.title" />
              <div class="card-image-overlay"></div>
              <span class="card-type-badge" :class="project.typeClass">{{ project.type }}</span>
            </div>

            <!-- Contenu -->
            <div class="card-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>

              <!-- Boutons -->
              <div class="card-actions">

                <!-- Visionner -->
                <a v-if="project.demo" :href="project.demo" target="_blank" class="action-btn demo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  Visionner
                </a>
                <span v-else class="action-btn demo disabled">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  Visionner
                </span>

                <!-- GitHub -->
                <a v-if="project.github" :href="project.github" target="_blank" class="action-btn github">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  GitHub
                </a>
                <span v-else class="action-btn github disabled">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Privé
                </span>

              </div>
            </div>

          </div>
        </div>
      </Transition>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// ── FILTRES ────────────────────────────────────────────────
const activeFilter = ref('Tous')
const filters = ['Tous', 'Personnel', 'Scolaire']

// ── PROJETS ────────────────────────────────────────────────
const projects = [
  {
    title:       'Portfolio Personnel',
    type:        'Personnel',
    typeClass:   'personnel',
    description: 'Mon portfolio personnel développé avec Vue 3 et Vite. Design moderne avec dark/light mode, animations fluides et architecture composants.',
    image:       '/images/portfolio.png',
    github:      'https://github.com/pierclaud7/pierclaud-portfolio',
    demo:        'https://pierclaud.fr',
  },
  {
    title:       'FlyTo',
    type:        'Personnel',
    typeClass:   'personnel',
    description: 'Application de recherche de vols développée en Vue.js. Consommation d\'une API REST pour afficher les destinations et les tarifs en temps réel.',
    image:       '/images/flyto.png',
    github:      'https://github.com/pierclaud7?tab=repositories',
    demo:        null,
  },
  {
    title:       'Chifoumi',
    type:        'Scolaire',
    typeClass:   'scolaire',
    description: 'Jeu de Pierre-Feuille-Ciseaux en JavaScript vanilla. Interface simple et intuitive avec gestion des scores et animations.',
    image:       '/images/chifoumi.png',
    github:      'https://github.com/pierclaud7?tab=repositories',
    demo:        null,
  },
  {
    title:       'Mes Résultats',
    type:        'Scolaire',
    typeClass:   'scolaire',
    description: 'Application web de suivi des résultats scolaires. Gestion des notes, calcul des moyennes et affichage des statistiques par matière.',
    image:       '/images/mes-resultats.png',
    github:      'https://github.com/pierclaud7?tab=repositories',
    demo:        null,
  },
]

// ── FILTRE ACTIF ───────────────────────────────────────────
const filteredProjects = computed(() => {
  if (activeFilter.value === 'Tous') return projects
  return projects.filter(p => p.type === activeFilter.value)
})
</script>

<style scoped>
/* ── HERO ────────────────────────────────────────────────── */
.page-hero  { background: var(--bg2); border-bottom: 1px solid var(--border); padding: 120px 40px 60px; text-align: center; }
.hero-inner { max-width: 700px; margin: 0 auto; }
.page-title { font-family: var(--font-display); font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; color: var(--text); margin-bottom: 16px; }
.page-desc  { font-size: 1rem; color: var(--text2); line-height: 1.8; }

/* ── CONTENT ─────────────────────────────────────────────── */
.page-content { width: 100%; max-width: 1400px; margin: 0 auto; padding: 48px 40px 100px; }

/* ── FILTRES ─────────────────────────────────────────────── */
.filters      { display: flex; gap: 0; margin-bottom: 48px; border-bottom: 1px solid var(--border); flex-wrap: wrap; }
.filter-btn   { background: transparent; border: none; color: var(--text2); padding: 10px 20px 12px; font-family: var(--font-display); font-size: 0.88rem; font-weight: 600; cursor: pointer; transition: color var(--transition); position: relative; white-space: nowrap; }
.filter-btn::after        { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 2px; background: var(--accent); transform: scaleX(0); transition: transform var(--transition); }
.filter-btn:hover         { color: var(--text); }
.filter-btn.active        { color: var(--text); }
.filter-btn.active::after { transform: scaleX(1); }

/* ── GRILLE 2 COLONNES ───────────────────────────────────── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

/* ── CARTE ───────────────────────────────────────────────── */
.project-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all var(--transition);
}
.project-card:hover { border-color: var(--accent); box-shadow: 0 16px 48px rgba(0,0,0,0.25); transform: translateY(-4px); }

/* ── IMAGE ───────────────────────────────────────────────── */
.card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--bg3);
  flex-shrink: 0;
}
.card-image img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform 0.6s ease, filter 0.6s ease;
  filter: brightness(0.88);
}
.project-card:hover .card-image img { transform: scale(1.04); filter: brightness(0.7); }

/* Dégradé bas */
.card-image-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 50%, var(--bg2) 100%);
  pointer-events: none;
}

/* Badge type */
.card-type-badge { position: absolute; top: 14px; left: 16px; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 5px 14px; border-radius: 100px; color: #fff; }
.card-type-badge.personnel { background: rgba(108, 99, 255, 0.9); }
.card-type-badge.scolaire  { background: rgba(52, 211, 153, 0.9); }

/* ── CONTENU ─────────────────────────────────────────────── */
.card-content {
  padding: 24px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}
.project-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 800; color: var(--text); }
.project-desc  { font-size: 0.88rem; color: var(--text2); line-height: 1.75; flex: 1; }

/* ── BOUTONS ─────────────────────────────────────────────── */
.card-actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: auto; padding-top: 8px; }
.action-btn {
  display: inline-flex; align-items: center; gap: 7px;
  font-size: 0.82rem; font-weight: 600;
  padding: 9px 20px; border-radius: 100px;
  text-decoration: none; transition: all var(--transition);
  border: 1px solid var(--border); white-space: nowrap;
}
.action-btn.demo                        { background: var(--accent); border-color: var(--accent); color: #fff; box-shadow: 0 4px 16px var(--glow); }
.action-btn.demo:not(.disabled):hover   { transform: translateY(-2px); box-shadow: 0 8px 24px var(--glow); }
.action-btn.github                      { background: var(--bg3); color: var(--text); }
.action-btn.github:not(.disabled):hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
.action-btn.disabled                    { opacity: 0.35; cursor: default; pointer-events: none; }

/* ── TRANSITION ──────────────────────────────────────────── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from,   .fade-leave-to     { opacity: 0; }

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 900px) {
  .projects-grid { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .page-hero    { padding: 100px 20px 48px; }
  .page-content { padding: 32px 20px 80px; }
  .card-content { padding: 18px 20px 22px; }
}
</style>