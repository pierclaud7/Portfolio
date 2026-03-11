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
          <div
            v-for="project in filteredProjects"
            :key="project.title"
            class="project-card"
            @click="project.github ? openUrl(project.github) : null"
            :class="{ clickable: project.github || project.demo }"
          >
            <div class="card-image">
              <img :src="project.image" :alt="project.title" />
              <div class="card-overlay">
                <a v-if="project.demo" :href="project.demo" target="_blank" class="overlay-btn" @click.stop>Demo</a>
                <a v-if="project.github" :href="project.github" target="_blank" class="overlay-btn" @click.stop>GitHub</a>
              </div>
            </div>
            <div class="card-footer">
              <div class="card-footer-left">
                <h3 class="project-title">{{ project.title }}</h3>
                <div class="project-tags">
                  <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
                </div>
              </div>
              <span class="project-type" :class="project.typeClass">{{ project.type }}</span>
            </div>
          </div>
        </div>
      </Transition>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('Tous')
const filters = ['Tous', 'Personnel', 'Scolaire', 'Professionnel']

const openUrl = (url) => window.open(url, '_blank')

const projects = [
  {
    title: 'Portfolio Personnel',
    type: 'Personnel',
    typeClass: 'personnel',
    tags: ['Vue.js', 'Vite', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    github: 'https://github.com/pierclaud7',
    demo: 'https://pierclaud.fr',
  },
  {
    title: 'Chifoumi',
    type: 'Personnel',
    typeClass: 'personnel',
    tags: ['JavaScript', 'HTML', 'CSS'],
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&q=80',
    github: 'https://github.com/pierclaud7',
    demo: null,
  },
  {
    title: 'FlyTo',
    type: 'Scolaire',
    typeClass: 'scolaire',
    tags: ['Vue.js', 'JavaScript', 'API'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
    github: 'https://github.com/pierclaud7',
    demo: null,
  },
  {
    title: 'Mes Résultats',
    type: 'Scolaire',
    typeClass: 'scolaire',
    tags: ['PHP', 'MySQL', 'HTML/CSS'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    github: 'https://github.com/pierclaud7',
    demo: null,
  },
  {
    title: 'My Water Manager',
    type: 'Professionnel',
    typeClass: 'professionnel',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',
    github: null,
    demo: null,
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Tous') return projects
  return projects.filter(p => p.type === activeFilter.value)
})
</script>

<style scoped>
/* ── HERO ────────────────────────────────────────────────── */
.page-hero {
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
  padding: 120px 40px 60px;
  text-align: center;
}
.hero-inner { max-width: 700px; margin: 0 auto; }
.page-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 16px;
}
.page-desc { font-size: 1rem; color: var(--text2); line-height: 1.8; }

/* ── CONTENT ─────────────────────────────────────────────── */
.page-content { max-width: 1000px; margin: 0 auto; padding: 48px 40px 100px; }

/* ── FILTRES ─────────────────────────────────────────────── */
.filters {
  display: flex; gap: 0;
  margin-bottom: 36px;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
}
.filter-btn {
  background: transparent; border: none; color: var(--text2);
  padding: 10px 20px 12px; font-family: var(--font-display);
  font-size: 0.88rem; font-weight: 600; cursor: pointer;
  transition: color var(--transition); position: relative; white-space: nowrap;
}
.filter-btn::after {
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
  height: 2px; background: var(--accent);
  transform: scaleX(0); transition: transform var(--transition);
}
.filter-btn:hover { color: var(--text); }
.filter-btn.active { color: var(--text); }
.filter-btn.active::after { transform: scaleX(1); }

/* ── GRILLE ──────────────────────────────────────────────── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* ── CARTE ───────────────────────────────────────────────── */
.project-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: all var(--transition);
}
.project-card.clickable { cursor: pointer; }
.project-card:hover { border-color: var(--accent); transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.2); }

/* ── IMAGE ───────────────────────────────────────────────── */
.card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: var(--bg3);
}
.card-image img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform 0.4s ease, filter 0.4s ease;
  filter: brightness(0.85);
}
.project-card:hover .card-image img { transform: scale(1.04); filter: brightness(0.6); }

.card-overlay {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  gap: 12px;
  opacity: 0; transition: opacity 0.3s ease;
}
.project-card:hover .card-overlay { opacity: 1; }
.overlay-btn {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.3);
  color: #fff; text-decoration: none;
  padding: 8px 20px; border-radius: 100px;
  font-size: 0.85rem; font-weight: 600;
  transition: all 0.2s ease;
}
.overlay-btn:hover { background: var(--accent); border-color: var(--accent); }

/* ── FOOTER CARTE ────────────────────────────────────────── */
.card-footer {
  display: flex; align-items: center;
  justify-content: space-between; gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid var(--border);
}
.card-footer-left { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.project-title {
  font-family: var(--font-display); font-weight: 700;
  font-size: 0.95rem; color: var(--text);
}
.project-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.project-tag {
  background: var(--bg3); color: var(--text2);
  font-size: 0.7rem; padding: 2px 8px;
  border-radius: 100px; border: 1px solid var(--border);
}

.project-type {
  font-size: 0.68rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.07em;
  padding: 3px 10px; border-radius: 100px;
  white-space: nowrap; flex-shrink: 0;
}
.project-type.personnel     { color: var(--accent);  background: var(--glow); }
.project-type.scolaire      { color: #34d399; background: rgba(52,211,153,0.1); }
.project-type.professionnel { color: #f59e0b; background: rgba(245,158,11,0.1); }

/* ── TRANSITION ──────────────────────────────────────────── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 768px) {
  .page-hero { padding: 100px 20px 48px; }
  .page-content { padding: 32px 20px 80px; }
  .projects-grid { grid-template-columns: 1fr; }
}
</style>