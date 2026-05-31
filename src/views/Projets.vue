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

      <!-- GRILLE PROJETS -->
      <Transition name="fade" mode="out-in">
        <div class="projects-grid" :key="activeFilter">
          <div v-for="project in filteredProjects" :key="project.title" class="project-card">

            <div class="card-image">
              <img :src="project.image" :alt="project.title" />
              <div class="card-image-overlay"></div>
              <span class="card-type-badge" :class="project.typeClass">{{ project.type }}</span>
            </div>

            <div class="card-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>
              <div class="card-actions">
                <a v-if="project.demo" :href="project.demo" target="_blank" class="action-btn demo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  Visionner
                </a>
                <span v-else class="action-btn demo disabled">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  Visionner
                </span>
                <a v-if="project.github" :href="project.github" target="_blank" class="action-btn github">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  GitHub
                </a>
                <span v-else class="action-btn github disabled">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Privé
                </span>
              </div>
            </div>

          </div>
        </div>
      </Transition>

      <!-- AUTRES REALISATIONS -->
      <section class="realisations-section">
        <div class="realisations-header">
          <h2 class="realisations-title">Autres réalisations</h2>
          <p class="realisations-desc">Activités réalisées en formation dans le cadre du BTS SIO option SLAM.</p>
        </div>
        <div class="realisations-list">
          <div v-for="r in realisations" :key="r.title" class="realisation-item">
            <div class="realisation-info">
              <h3 class="realisation-name">{{ r.title }}</h3>
              <p class="realisation-desc">{{ r.description }}</p>
            </div>
            <a :href="r.pdf" target="_blank" class="pdf-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Voir le document
            </a>
          </div>
        </div>
      </section>

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
    title:       'Portfolio',
    type:        'Personnel',
    typeClass:   'personnel',
    description: 'Mon portfolio personnel développé avec Vue 3 et Vite. Design moderne avec dark/light mode, animations fluides et architecture composants.',
    image:       '/Portfolio.png',
    github:      'https://github.com/pierclaud7/Portfolio',
    demo:        'https://pierclaud.fr',
  },
  {
    title:       'FlyTo',
    type:        'Personnel',
    typeClass:   'personnel',
    description: 'Application de recherche de vols développée en Vue.js. Consommation d\'une API REST pour afficher les destinations et les tarifs en temps réel.',
    image:       '/FlyTo.png',
    github:      'https://github.com/pierclaud7/Flyto',
    demo:        null,
  },
  {
    title:       'Chifoumi',
    type:        'Scolaire',
    typeClass:   'scolaire',
    description: 'Jeu de Pierre-Feuille-Ciseaux en JavaScript vanilla. Interface simple et intuitive avec gestion des scores.',
    image:       '/Chifoumi.png',
    github:      'https://github.com/pierclaud7/Chifoumi',
    demo:        'https://pierclaud7.github.io/Chifoumi/src/',
  },
  {
    title:       'Vos Résultats',
    type:        'Scolaire',
    typeClass:   'scolaire',
    description: 'Application web de suivi des résultats scolaires. Gestion des notes, calcul des moyennes et affichage des statistiques par matière.',
    image:       '/Vosresultats.png',
    github:      'https://github.com/pierclaud7/Vos-Resultats',
    demo:        null,
  },
]

// ── FILTRE ACTIF ───────────────────────────────────────────
const filteredProjects = computed(() => {
  if (activeFilter.value === 'Tous') return projects
  return projects.filter(p => p.type === activeFilter.value)
})

// ── REALISATIONS ───────────────────────────────────────────
const realisations = [
  {
    title:       'GLPI',
    description: 'Création de comptes utilisateurs, gestion des tickets d\'incidents et de demandes, mise en place d\'une base de connaissance.',
    pdf:         '/Glpi.pdf',
  },
  {
    title:       'RAID 5',
    description: 'Configuration d\'un système RAID 5 sur un serveur pour assurer la redondance des données avec tolérance à la panne d\'un disque.',
    pdf:         '/RAID5.pdf',
  },
  {
    title:       'GPO',
    description: 'Création et déploiement de stratégies de groupe dans un environnement Active Directory pour uniformiser les paramètres des postes.',
    pdf:         '/GPO.pdf',
  },
  {
    title:       'DHCP',
    description: 'Installation et configuration d\'un serveur DHCP pour l\'attribution automatique des adresses IP sur un réseau local.',
    pdf:         '/DHCP.pdf',
  },
  {
    title:       'ISO 20000',
    description: 'Étude et présentation de la norme internationale de gestion des services informatiques et comparaison avec le référentiel ITIL.',
    pdf:         '/ISO2000.pdf',
  },
]
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

/* ── GRILLE PROJETS ──────────────────────────────────────── */
.projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }

/* ── CARTE PROJET ────────────────────────────────────────── */
.project-card { background: var(--bg2); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; display: flex; flex-direction: column; transition: all var(--transition); }
.project-card:hover { border-color: var(--accent); box-shadow: 0 16px 48px rgba(0,0,0,0.25); transform: translateY(-4px); }

.card-image { position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; background: var(--bg3); flex-shrink: 0; }
.card-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s ease, filter 0.6s ease; filter: brightness(0.88); }
.project-card:hover .card-image img { transform: scale(1.04); filter: brightness(0.7); }
.card-image-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 50%, var(--bg2) 100%); pointer-events: none; }

.card-type-badge { position: absolute; top: 14px; left: 16px; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 5px 14px; border-radius: 100px; color: #fff; }
.card-type-badge.personnel { background: rgba(108, 99, 255, 0.9); }
.card-type-badge.scolaire  { background: rgba(52, 211, 153, 0.9); }

.card-content  { padding: 24px 28px 28px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
.project-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 800; color: var(--text); }
.project-desc  { font-size: 0.88rem; color: var(--text2); line-height: 1.75; flex: 1; }

.card-actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: auto; padding-top: 8px; }
.action-btn { display: inline-flex; align-items: center; gap: 7px; font-size: 0.82rem; font-weight: 600; padding: 9px 20px; border-radius: 100px; text-decoration: none; transition: all var(--transition); border: 1px solid var(--border); white-space: nowrap; }
.action-btn.demo                        { background: var(--accent); border-color: var(--accent); color: #fff; box-shadow: 0 4px 16px var(--glow); }
.action-btn.demo:not(.disabled):hover   { transform: translateY(-2px); box-shadow: 0 8px 24px var(--glow); }
.action-btn.github                      { background: var(--bg3); color: var(--text); }
.action-btn.github:not(.disabled):hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
.action-btn.disabled                    { opacity: 0.35; cursor: default; pointer-events: none; }

/* ── AUTRES REALISATIONS ─────────────────────────────────── */
.realisations-section { margin-top: 80px; }

.realisations-header { margin-bottom: 28px; text-align: center; }
.realisations-title  { font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; color: var(--text); margin-bottom: 8px; }
.realisations-desc   { font-size: 0.95rem; color: var(--text2); line-height: 1.7; }

.realisations-list { display: flex; flex-direction: column; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }

.realisation-item { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 20px 28px; background: var(--bg2); border-bottom: 1px solid var(--border); transition: background var(--transition); }
.realisation-item:last-child { border-bottom: none; }
.realisation-item:hover      { background: var(--bg3); }

.realisation-info { flex: 1; }
.realisation-name { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.realisation-desc { font-size: 0.82rem; color: var(--text2); line-height: 1.6; }

.pdf-btn { display: inline-flex; align-items: center; gap: 7px; font-size: 0.82rem; font-weight: 600; white-space: nowrap; padding: 9px 18px; border-radius: 100px; text-decoration: none; flex-shrink: 0; border: 1px solid var(--border); background: var(--bg3); color: var(--text); transition: all var(--transition); }
.pdf-btn:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }

/* ── TRANSITION ──────────────────────────────────────────── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from,   .fade-leave-to     { opacity: 0; }

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 900px) { .projects-grid { grid-template-columns: 1fr; } }
@media (max-width: 768px) {
  .page-hero    { padding: 100px 20px 48px; }
  .page-content { padding: 32px 20px 80px; }
  .card-content { padding: 18px 20px 22px; }
  .realisation-item { flex-direction: column; align-items: flex-start; gap: 14px; padding: 18px 20px; }
}
</style>