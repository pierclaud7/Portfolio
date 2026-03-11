<template>
  <div class="page">

    <!-- HERO -->
    <section class="page-hero">
      <div class="hero-inner">
        <h1 class="page-title">Veille Technologique</h1>
        <p class="page-desc">
          Le but de la veille technologique est de suivre l'évolution d'une technologie sur la thématique choisie.
          Je suis l'actualité en <strong>Intelligence Artificielle</strong>, <strong>Cybersécurité</strong> et <strong>Gaming</strong> —
          trois domaines qui évoluent rapidement et qui m'intéressent au quotidien.
        </p>
        <p class="page-desc">
          Pour recueillir de nouvelles informations, j'utilise des flux RSS via <strong>Feedly</strong>, ainsi que
          des sources officielles comme l'ANSSI, ActuIA, IT-Connect et JeuxVideo.com.
        </p>
      </div>
    </section>

    <div class="page-content">

      <!-- FILTRES -->
      <div class="filters">
        <button class="filter-btn" :class="{ active: activeFilter === 'all' }" @click="activeFilter = 'all'">
          Tous les articles
        </button>
        <button class="filter-btn" :class="{ active: activeFilter === 'ia' }" @click="activeFilter = 'ia'">
          Intelligence Artificielle
        </button>
        <button class="filter-btn" :class="{ active: activeFilter === 'cyber' }" @click="activeFilter = 'cyber'">
          Cybersécurité
        </button>
        <button class="filter-btn" :class="{ active: activeFilter === 'gaming' }" @click="activeFilter = 'gaming'">
          Gaming
        </button>
      </div>

      <!-- LISTE ARTICLES -->
      <Transition name="fade" mode="out-in">
        <div class="articles-list" :key="activeFilter">
          <div
            v-for="article in filteredArticles"
            :key="article.title"
            class="article-row"
            @click="openUrl(article.url)"
          >
            <div class="article-thumb" :class="article.category">
              <img
                :src="article.image"
                :alt="article.title"
                @error="onImgError"
              />
              <div class="thumb-fallback">
                <span>{{ categoryLabel(article.category)[0] }}</span>
              </div>
            </div>
            <div class="article-content">
              <div class="article-top">
                <span class="article-category" :class="article.category">
                  {{ categoryLabel(article.category) }}
                </span>
                <span class="article-date">{{ article.date }}</span>
              </div>
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-desc">{{ article.desc }}</p>
              <span class="article-source">{{ article.source }}</span>
            </div>
            <svg class="article-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </Transition>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')
const openUrl = (url) => window.open(url, '_blank')

const onImgError = (e) => {
  e.target.style.display = 'none'
  e.target.nextElementSibling.style.display = 'flex'
}

const categoryLabel = (cat) => {
  if (cat === 'ia') return 'Intelligence Artificielle'
  if (cat === 'cyber') return 'Cybersécurité'
  if (cat === 'gaming') return 'Gaming'
  return cat
}

const articles = [
  {
    category: 'ia',
    date: 'Mars 2026',
    title: 'Claude Sonnet 4.5 — Anthropic repousse les limites du code',
    desc: 'Anthropic dévoile Claude Sonnet 4.5, un modèle encore plus performant en programmation. Claude Opus 4.5 Thinking occupe désormais la 1ère place du classement WebDev Arena avec un score Elo de 1519.',
    source: 'actuia.com',
    url: 'https://www.actuia.com',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80',
  },
  {
    category: 'ia',
    date: 'Déc. 2025',
    title: '92% des développeurs utilisent déjà l\'IA pour coder',
    desc: 'Selon une étude GitHub 2025, la quasi-totalité des développeurs ont intégré des outils IA dans leur workflow. GitHub Copilot, Cursor IDE et Claude s\'imposent comme les références du marché.',
    source: 'aetherio.tech',
    url: 'https://aetherio.tech/articles/ia-developpement-web-2025-revolution-evolution',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&q=80',
  },
  {
    category: 'ia',
    date: 'Déc. 2025',
    title: 'DeepSeek R1, GPT-5 et Gemini 3 : la course aux LLMs s\'accélère',
    desc: 'L\'irruption de DeepSeek R1 et la montée des modèles ouverts ont accéléré la compétition mondiale. OpenAI, Anthropic et Google dominent désormais le marché des modèles dédiés au développement.',
    source: 'informatiquenews.fr',
    url: 'https://www.informatiquenews.fr/recap-2025-les-principales-actualites-ia-de-lannee-108702',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80',
  },
  {
    category: 'ia',
    date: 'Fév. 2025',
    title: 'L\'IA réduit le temps de développement web de 70%',
    desc: 'Les nouveaux outils basés sur l\'IA permettent aux développeurs de lancer des projets en quelques heures. Les sites générés par IA affichent des taux de conversion supérieurs de 25% aux sites traditionnels.',
    source: 'natural-net.fr',
    url: 'https://www.natural-net.fr/blog-agence-web/2025/02/13/intelligence-artificielle-revolution-et-transformation-digitale-du-web-en-2025.html',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80',
  },
  {
    category: 'cyber',
    date: 'Mars 2026',
    title: 'Fuite massive : 11 à 15 millions de Français exposés via MonLogicielMedical',
    desc: 'Une intrusion sur la plateforme Cegedim a compromis les données de santé de millions de Français. Cette attaque s\'ajoute à une série de brèches majeures frappant le secteur médical.',
    source: 'it-connect.fr',
    url: 'https://www.it-connect.fr/actualites/actu-securite/',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&q=80',
  },
  {
    category: 'cyber',
    date: 'Jan. 2026',
    title: '50 organisations françaises victimes de cyberattaques en 2025',
    desc: 'Free, Cultura, Boulanger, SFR, ManoMano… Le bilan 2025 est lourd : plus de 50 entités majeures touchées, des millions de données personnelles compromises.',
    source: 'rm3a.fr',
    url: 'https://rm3a.fr/bilan-des-cyberattaques-en-france-2024-2025-rm3a-cybersecurite/',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
  },
  {
    category: 'cyber',
    date: 'Oct. 2025',
    title: 'Ransomware : 75% des brèches mondiales lui sont liées (DBIR 2025)',
    desc: 'Le rapport Verizon DBIR 2025 analyse 22 000 incidents. Le phishing reste en tête avec 60% des attaques, suivi de l\'exploitation de vulnérabilités sur les pare-feu et VPN exposés.',
    source: 'factoria-groupe.fr',
    url: 'https://www.factoria-groupe.fr/statistiquecyberattaque-pxl-36_22_221.html',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80',
  },
  {
    category: 'cyber',
    date: 'Juil. 2025',
    title: 'Zero Trust Architecture : la nouvelle norme de sécurité en entreprise',
    desc: 'Les entreprises adoptent massivement l\'approche Zero Trust. Une compagnie d\'assurance française a constaté une réduction de 45% des coûts de gestion des accès après implémentation.',
    source: 'synetis.com',
    url: 'https://www.synetis.com/cybersecurite-le-point-sur-les-tendances-qui-ont-marque-2025',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400&q=80',
  },
  {
    category: 'gaming',
    date: 'Mars 2026',
    title: 'Crimson Desert : l\'action-RPG coréen tant attendu enfin disponible',
    desc: 'Pearl Abyss lance Crimson Desert le 19 mars 2026 sur PC, PS5 et Xbox Series. Monde ouvert ambitieux, vous incarnez Kliff Macduff, chef des Crinières Grises dans un continent ravagé par les conflits.',
    source: 'leclaireur.fnac.com',
    url: 'https://leclaireur.fnac.com/selection/cp50160-les-sorties-jeux-video-les-plus-attendues-du-mois-de-mars-2026/',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80',
  },
  {
    category: 'gaming',
    date: 'Fév. 2026',
    title: 'Resident Evil Requiem — retour aux origines de l\'horreur',
    desc: 'Capcom relance la saga avec Resident Evil Requiem, sorti le 27 février 2026. Le jeu suit Grace Ashcroft, agent du FBI, dans Raccoon City, avec une vue alternant première et troisième personne.',
    source: 'instant-gaming.com',
    url: 'https://www.instant-gaming.com/fr/blog/17040-les-jeux-les-plus-attendus-en-2026/',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80',
  },
  {
    category: 'gaming',
    date: 'Mars 2026',
    title: 'Pokémon Pokopia : la simulation de vie Pokémon débarque sur Switch 2',
    desc: 'Sorti le 5 mars 2026 sur Nintendo Switch 2, Pokémon Pokopia mélange gameplay type Animal Crossing et univers Pokémon. Vous incarnez un Métamorph qui débarque sur une île déserte.',
    source: 'sortiraparis.com',
    url: 'https://www.sortiraparis.com/loisirs/gaming/articles/244879-jeux-video-les-sorties-jeux-video-de-mars-2026-le-calendrier-des-nouveautes',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&q=80',
  },
  {
    category: 'gaming',
    date: 'Jan. 2026',
    title: '2026 : une année décisive pour l\'industrie du jeu vidéo',
    desc: 'Selon Newzoo, le marché mondial du jeu vidéo a généré 188,8 milliards de dollars en 2025 (+3,4%). GTA VI, Fable, 007 First Light et Marvel\'s Wolverine font de 2026 une année charnière.',
    source: 'gamingcampus.fr',
    url: 'https://gamingcampus.fr/tomorrow-lab/trends/perspective-jeu-video-2026.html',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80',
  },
]

const filteredArticles = computed(() => {
  if (activeFilter.value === 'all') return articles
  return articles.filter(a => a.category === activeFilter.value)
})
</script>

<style scoped>
/* ── HERO ────────────────────────────────────────────────── */
.page-hero {
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
  padding: 120px 40px 60px;
}
.hero-inner { max-width: 700px; margin: 0 auto; }
.page-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 20px;
  text-align: center;
}
.page-desc {
  font-size: 1rem;
  color: var(--text2);
  line-height: 1.8;
  margin-bottom: 16px;
  text-align: center;
}
.page-desc strong { color: var(--text); }

/* ── CONTENT ─────────────────────────────────────────────── */
.page-content { max-width: 800px; margin: 0 auto; padding: 48px 40px 100px; }

/* ── FILTRES ─────────────────────────────────────────────── */
.filters {
  display: flex;
  gap: 0;
  margin-bottom: 36px;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
}
.filter-btn {
  background: transparent;
  border: none;
  color: var(--text2);
  padding: 10px 20px 12px;
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: color var(--transition);
  position: relative;
  white-space: nowrap;
}
.filter-btn::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0; right: 0;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transition: transform var(--transition);
}
.filter-btn:hover { color: var(--text); }
.filter-btn.active { color: var(--text); }
.filter-btn.active::after { transform: scaleX(1); }

/* ── ARTICLES ────────────────────────────────────────────── */
.articles-list { display: flex; flex-direction: column; }

.article-row {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: all var(--transition);
}
.article-row:hover .article-title { color: var(--accent); }
.article-row:hover .article-arrow { opacity: 1; transform: translateX(4px); color: var(--accent); }

/* ── THUMBNAIL ───────────────────────────────────────────── */
.article-thumb {
  flex-shrink: 0;
  width: 120px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: var(--bg3);
  border: 1px solid var(--border);
}
.article-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.article-row:hover .article-thumb img { transform: scale(1.05); }
.thumb-fallback {
  display: none;
  position: absolute;
  inset: 0;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: var(--text2);
  opacity: 0.3;
}
.article-thumb.ia     { background: linear-gradient(135deg, rgba(108,99,255,0.15), rgba(108,99,255,0.05)); }
.article-thumb.cyber  { background: linear-gradient(135deg, rgba(52,211,153,0.15), rgba(52,211,153,0.05)); }
.article-thumb.gaming { background: linear-gradient(135deg, rgba(251,146,60,0.15), rgba(251,146,60,0.05)); }

/* ── CONTENU ─────────────────────────────────────────────── */
.article-content { flex: 1; display: flex; flex-direction: column; gap: 6px; min-width: 0; }

.article-top { display: flex; align-items: center; gap: 12px; }
.article-category {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}
.article-category.ia     { color: var(--accent); }
.article-category.cyber  { color: #34d399; }
.article-category.gaming { color: #fb923c; }

.article-date { font-size: 0.78rem; color: var(--text2); }

.article-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text);
  line-height: 1.4;
  transition: color var(--transition);
}
.article-desc {
  font-size: 0.85rem;
  color: var(--text2);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.article-source { font-size: 0.75rem; color: var(--text2); opacity: 0.55; }

.article-arrow {
  flex-shrink: 0;
  margin-top: 6px;
  opacity: 0;
  transition: all 0.2s ease;
  color: var(--text2);
}

/* ── TRANSITION ──────────────────────────────────────────── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 768px) {
  .page-hero { padding: 100px 20px 48px; }
  .page-content { padding: 32px 20px 80px; }
  .article-thumb { width: 90px; height: 64px; }
  .article-arrow { display: none; }
  .filter-btn { padding: 8px 12px 10px; font-size: 0.8rem; }
}
</style>