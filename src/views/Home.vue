<template>
  <div class="home">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <div class="orb orb1"></div>
        <div class="orb orb2"></div>
        <div class="grid-bg"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge fade-up" style="animation-delay:0.1s">
          <span class="badge-dot"></span> En recherche d'alternance
        </div>
        <h1 class="hero-title fade-up" style="animation-delay:0.2s">
          Bonjour, je suis<br>
          <span class="highlight">Pierclaud BOUKI</span>
        </h1>
        <p class="hero-subtitle fade-up" style="animation-delay:0.3s">
          Étudiant en <strong>BTS SIO SLAM</strong> <br> Développeur Junior passionné par la création de sites web modernes
        </p>
        <div class="hero-cta fade-up" style="animation-delay:0.4s">
          <a href="/cv.pdf" target="_blank" class="btn-primary">Mon CV</a>
          <RouterLink to="/contact" class="btn-ghost">Me contacter</RouterLink>
        </div>
        <div class="hero-socials fade-up" style="animation-delay:0.5s">
          <a href="https://linkedin.com/in/pierclaud-bouki" target="_blank" class="social-icon-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://github.com/pierclaud7" target="_blank" class="social-icon-link" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="hero-scroll">
        <div class="scroll-indicator">
          <div class="scroll-dot"></div>
        </div>
      </div>
    </section>

    <!-- PARCOURS -->
    <section class="section exp-section">
      <div class="parcours-header">
        <h2 class="section-title">Mon parcours</h2>
      </div>
      <div class="parcours-tabs">
        <button class="tab-btn" :class="{ active: activeTab === 'exp' }" @click="activeTab = 'exp'">
          💼 Expériences
        </button>
        <button class="tab-btn" :class="{ active: activeTab === 'formation' }" @click="activeTab = 'formation'">
          🎓 Formations
        </button>
      </div>
      <Transition name="tab" mode="out-in">
        <div class="parcours-cards" v-if="activeTab === 'exp'" key="exp">
          <div v-for="exp in experiences" :key="exp.company" class="parcours-card">
            <div class="card-accent-bar"></div>
            <div class="card-body">
              <div class="card-top">
                <div>
                  <h3 class="card-role">{{ exp.role }}</h3>
                  <p class="card-company">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {{ exp.company }}
                  </p>
                </div>
                <span class="card-date">{{ exp.date }}</span>
              </div>
              <div class="card-divider"></div>
              <ul class="card-tasks">
                <li v-for="t in exp.tasks" :key="t">
                  <span class="task-dot"></span>{{ t }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="parcours-cards" v-else key="formation">
          <div v-for="edu in formations" :key="edu.school" class="parcours-card formation">
            <div class="card-accent-bar"></div>
            <div class="card-body">
              <div class="card-top">
                <div>
                  <h3 class="card-role">{{ edu.title }}</h3>
                  <p class="card-company">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    {{ edu.school }}
                  </p>
                </div>
                <span class="card-date formation">{{ edu.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </section>

    <!-- SKILLS -->
    <section class="section skills-section">
      <div class="section-inner">
        <div class="skills-header">
          <h2 class="section-title">Mes compétences</h2>
          <p class="skills-subtitle">Les technologies avec lesquelles je travaille au quotidien</p>
        </div>
      </div>
      <div class="carousel-wrapper">
        <div class="carousel-fade-left"></div>
        <div class="carousel-fade-right"></div>
        <div class="carousel-track">
          <div class="carousel-slide" v-for="i in 3" :key="i">
            <div v-for="skill in allSkills" :key="`${i}-${skill.name}`" class="carousel-item">
              <img :src="skill.logo" :alt="skill.name" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CERTIFICATIONS -->
<section class="section certif-section">
  <div class="section-inner">

    <h2 class="section-title centered">Mes certifications</h2>
    <p class="certif-subtitle">Certifications obtenues ou en cours dans le cadre de ma formation</p>

    <div class="certif-list">

      <!-- ── ATELIER RGPD (accordion avec onglets modules) ── -->
      <div class="certif-row certif-accordion" :class="{ open: rgpdOpen }">

        <!-- Ligne principale cliquable -->
        <div class="certif-main" @click="rgpdOpen = !rgpdOpen">
          <div class="certif-logo">
            <img src="https://www.cnil.fr/sites/cnil/files/thumbnails/image/cnil-logo_rvb.jpg" alt="CNIL" />
          </div>
          <div class="certif-info">
            <span class="certif-name">L'atelier RGPD</span>
            <span class="certif-source">CNIL</span>
          </div>
          <a href="https://atelier-rgpd.cnil.fr" target="_blank" class="certif-btn cours" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Cours
          </a>
          <!-- Chevron animé -->
          <svg class="certif-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>

        <!-- Panneau des modules (visible si rgpdOpen) -->
        <Transition name="accordion">
          <div class="certif-modules" v-if="rgpdOpen">

            <!-- Onglets modules -->
            <div class="modules-tabs">
              <button
                v-for="(mod, i) in rgpdModules"
                :key="i"
                class="module-tab"
                :class="{ active: activeModule === i }"
                @click="activeModule = i"
              >
                Module {{ i + 1 }}
              </button>
            </div>

            <!-- Contenu du module actif -->
            <Transition name="tab" mode="out-in">
              <div class="module-content" :key="activeModule">
                <div class="module-info">
                  <span class="module-title">{{ rgpdModules[activeModule].title }}</span>
                  <span class="certif-status" :class="rgpdModules[activeModule].obtained ? 'obtained' : 'pending'">
                    {{ rgpdModules[activeModule].obtained ? '✓ Obtenu' : 'En cours' }}
                  </span>
                </div>
                <a
                  v-if="rgpdModules[activeModule].attestation"
                  :href="rgpdModules[activeModule].attestation"
                  target="_blank"
                  class="certif-btn attestation"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  Voir l'attestation
                </a>
                <span v-else class="certif-btn disabled">Pas encore obtenu</span>
              </div>
            </Transition>

          </div>
        </Transition>
      </div>

      <!-- ── AUTRES CERTIFICATIONS ── -->
      <div v-for="cert in certifications" :key="cert.name" class="certif-row">
        <div class="certif-logo">
          <img :src="cert.logo" :alt="cert.name" />
        </div>
        <div class="certif-info">
          <span class="certif-name">{{ cert.name }}</span>
          <span class="certif-source">{{ cert.source }}</span>
        </div>
        <span class="certif-status" :class="cert.obtained ? 'obtained' : 'pending'">
          {{ cert.obtained ? '✓ Obtenu' : 'En cours' }}
        </span>
        <div class="certif-actions">
          <a :href="cert.url" target="_blank" class="certif-btn cours">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Cours
          </a>
          <a v-if="cert.attestation" :href="cert.attestation" target="_blank" class="certif-btn attestation">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            Attestation
          </a>
          <span v-else class="certif-btn disabled">Pas encore</span>
        </div>
      </div>

    </div>
  </div>
</section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// ── ONGLETS PARCOURS ───────────────────────────────────────
const activeTab = ref('exp')

// ── COMPÉTENCES ────────────────────────────────────────────
const allSkills = [
  { name: 'HTML',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'           },
  { name: 'CSS',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'             },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vue.js',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'           },
  { name: 'PHP',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'               },
  { name: 'SQL',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'           },
  { name: 'Vite',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg'         },
  { name: 'Symfony',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg'       },
  { name: 'Git',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'               },
  { name: 'GitHub',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'         },
  { name: 'Bootstrap',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'  },
]

// ── EXPÉRIENCES ────────────────────────────────────────────
const experiences = [
  { date: 'Sept – Nov 2024',   role: 'Stagiaire Développeur',    company: 'My Water Manager, Metz',  tasks: ['Maintenance de l\'application', 'Nouvelles fonctionnalités', 'Travail en équipe'] },
  { date: 'Depuis juin 2023',  role: 'Employé Polyvalent',       company: 'Piopa, Metz',             tasks: ['Préparation des plats', 'Ouverture du restaurant'] },
  { date: 'Avril – Août 2022', role: 'Préparateur de commandes', company: 'Amazon, Augny',           tasks: ['Suivi des stocks', '+100 commandes/jour'] },
  { date: 'Sept – Nov 2021',   role: 'Inventoriste',             company: 'RGIS, Villers-lès-Nancy', tasks: ['Inventaire physique', 'Utilisation de logiciels'] },
]

// ── FORMATIONS ─────────────────────────────────────────────
const formations = [
  { date: '2023 – 2025', title: 'BTS SIO SLAM',         school: 'Mewo, Metz'                 },
  { date: '2022 – 2023', title: 'Licence Informatique', school: 'UPJV, Amiens'               },
  { date: '2020 – 2022', title: 'BTS Communication',    school: 'Formaction Institut, Ludres' },
]

// ── ACCORDION RGPD ─────────────────────────────────────────
const rgpdOpen    = ref(false)
const activeModule = ref(0)

// 6 modules RGPD — attestation: null = pas encore obtenue
const rgpdModules = [
  { title: 'Les bases du RGPD',                    obtained: true,  attestation: '/public/attestations/cnil/Attestation_M1.pdf' },
  { title: 'Les principes de la protection',        obtained: true,  attestation: '/public/attestations/cnil/Attestation_M2.pdf' },
  { title: 'Les droits des personnes',              obtained: false, attestation: null },
  { title: 'Les obligations des responsables',      obtained: false, attestation: null },
  { title: 'La sécurité des données',               obtained: false, attestation: null },
  { title: 'Les transferts hors Union européenne',  obtained: false, attestation: null },
]

// ── AUTRES CERTIFICATIONS ──────────────────────────────────
const certifications = [
  {
    name:        'Responsive Web Design',
    source:      'freeCodeCamp',
    logo:        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    obtained:    false,
    url:         'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
    attestation: null,
  },
  {
    name:        'JavaScript Certification',
    source:      'freeCodeCamp',
    logo:        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    obtained:    false,
    url:         'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/',
    attestation: null,
  },
  {
    name:        'Front-End Development Libraries',
    source:      'freeCodeCamp',
    logo:        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    obtained:    false,
    url:         'https://www.freecodecamp.org/learn/front-end-development-libraries/',
    attestation: null,
  },
]
</script>

<style scoped>
/* ── LAYOUT ─────────────────────────────────────────────── */
.section { width: 100%; padding: 80px 0; }
.section-inner { width: 100%; max-width: 900px; margin: 0 auto; padding: 0 40px; }

/* ── HERO ────────────────────────────────────────────────── */
.hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; padding: 120px 40px 80px; }
.hero-bg { position: absolute; inset: 0; pointer-events: none; }
.orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15; }
.orb1 { width: 600px; height: 600px; background: var(--accent); top: -100px; right: -100px; animation: pulse 8s ease-in-out infinite; }
.orb2 { width: 400px; height: 400px; background: var(--accent2); bottom: -50px; left: -50px; animation: pulse 10s ease-in-out infinite reverse; }
.grid-bg { position: absolute; inset: 0; background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%); }
@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
.hero-content { max-width: 700px; text-align: center; position: relative; z-index: 1; }
.hero-badge { display: inline-flex; align-items: center; gap: 8px; font-size: 0.85rem; font-weight: 500; color: var(--text2); background: var(--bg3); border: 1px solid var(--border); padding: 6px 16px; border-radius: 100px; margin-bottom: 28px; }
.badge-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 8px #22c55e; animation: blink 2s ease-in-out infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
.hero-title { font-family: var(--font-display); font-size: clamp(2.5rem, 7vw, 5rem); font-weight: 800; line-height: 1.1; color: var(--text); margin-bottom: 20px; }
.highlight { background: linear-gradient(135deg, var(--accent), var(--accent2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-subtitle { font-size: 1.15rem; color: var(--text2); line-height: 1.7; margin-bottom: 36px; }
.hero-subtitle strong { color: var(--text); }
.hero-cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 28px; }
.btn-primary { background: var(--accent); color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 100px; font-weight: 600; font-size: 0.95rem; transition: all var(--transition); box-shadow: 0 4px 24px var(--glow); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px var(--glow); }
.btn-ghost { background: transparent; color: var(--text); text-decoration: none; padding: 14px 28px; border-radius: 100px; font-weight: 600; font-size: 0.95rem; border: 1px solid var(--border); transition: all var(--transition); }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
.hero-socials { display: flex; gap: 16px; justify-content: center; align-items: center; margin-top: 4px; }
.social-icon-link { display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--border); color: var(--text2); background: var(--bg2); text-decoration: none; transition: all var(--transition); }
.social-icon-link:hover { color: var(--accent); border-color: var(--accent); transform: translateY(-3px); box-shadow: 0 6px 20px var(--glow); }
.hero-scroll { position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); }
.scroll-indicator { width: 26px; height: 42px; border: 2px solid var(--border); border-radius: 13px; display: flex; justify-content: center; padding-top: 6px; }
.scroll-dot { width: 4px; height: 8px; background: var(--accent); border-radius: 2px; animation: scrollDown 2s ease-in-out infinite; }
@keyframes scrollDown { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(12px); opacity: 0; } }

/* ── PARCOURS ────────────────────────────────────────────── */
.exp-section { background: transparent; padding-left: 40px; padding-right: 40px; }
.parcours-header { text-align: center; margin-bottom: 40px; }
.parcours-header .section-title { margin-bottom: 0; }
.parcours-tabs { display: flex; justify-content: center; gap: 8px; margin-bottom: 40px; }
.tab-btn { background: var(--bg2); border: 1px solid var(--border); color: var(--text2); padding: 10px 28px; border-radius: 100px; font-family: var(--font-display); font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all var(--transition); }
.tab-btn:hover { border-color: var(--accent); color: var(--text); }
.tab-btn.active { background: var(--accent); border-color: var(--accent); color: #fff; box-shadow: 0 4px 16px var(--glow); }
.tab-enter-active, .tab-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.tab-enter-from { opacity: 0; transform: translateY(10px); }
.tab-leave-to { opacity: 0; transform: translateY(-10px); }
.parcours-cards { display: flex; flex-direction: column; gap: 20px; width: 100%; max-width: 600px; margin: 0 auto; }
.parcours-card { background: var(--bg2); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; transition: all var(--transition); }
.parcours-card:hover { border-color: var(--accent); transform: translateY(-5px); box-shadow: 0 12px 32px var(--glow); }
.parcours-card.formation:hover { border-color: var(--accent2); box-shadow: 0 12px 32px rgba(255, 101, 132, 0.2); }
.card-accent-bar { height: 3px; background: linear-gradient(90deg, var(--accent), var(--accent2)); }
.parcours-card.formation .card-accent-bar { background: linear-gradient(90deg, var(--accent2), var(--accent)); }
.card-body { padding: 24px; display: flex; flex-direction: column; gap: 16px; }
.card-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
.card-role { font-family: var(--font-display); font-weight: 700; font-size: 1rem; color: var(--text); margin-bottom: 6px; }
.card-company { display: flex; align-items: center; gap: 5px; font-size: 0.85rem; color: var(--text2); }
.card-company svg { flex-shrink: 0; opacity: 0.6; }
.card-date { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--accent); background: var(--glow); padding: 4px 10px; border-radius: 100px; white-space: nowrap; flex-shrink: 0; }
.card-date.formation { color: var(--accent2); background: rgba(255, 101, 132, 0.1); }
.card-divider { height: 1px; background: var(--border); }
.card-tasks { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.card-tasks li { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--text2); }
.task-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
@media (max-width: 600px) { .card-top { flex-direction: column; gap: 8px; } .parcours-tabs { gap: 8px; } .exp-section { padding-left: 16px; padding-right: 16px; } }

/* ── SKILLS ──────────────────────────────────────────────── */
.skills-section { background: var(--bg); padding-bottom: 60px; }
.skills-header { text-align: center; margin-bottom: 52px; }
.skills-header .section-title { margin-bottom: 10px; }
.skills-subtitle { font-size: 1rem; color: var(--text2); }
.carousel-wrapper { position: relative; overflow: hidden; width: 100vw; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 12px 0; }
.carousel-fade-left, .carousel-fade-right { position: absolute; top: 0; bottom: 0; width: 200px; z-index: 2; pointer-events: none; }
.carousel-fade-left  { left: 0;  background: linear-gradient(to right, var(--bg), transparent); }
.carousel-fade-right { right: 0; background: linear-gradient(to left,  var(--bg), transparent); }
.carousel-track { display: flex; width: max-content; animation: scrollLeft 30s linear infinite; align-items: center; }
.carousel-track:hover { animation-play-state: paused; }
@keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
.carousel-slide { display: flex; align-items: center; gap: 56px; padding: 0 28px; }
.carousel-item { display: flex; align-items: center; justify-content: center; opacity: 0.75; transition: opacity 0.3s ease, transform 0.3s ease; cursor: default; flex-shrink: 0; }
.carousel-item:hover { opacity: 1; transform: scale(1.15); }
.carousel-item img { width: 80px; height: 80px; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3)); }

/* ── CERTIFICATIONS ──────────────────────────────────────── */
.certif-section { background: transparent; }
.certif-section .section-title.centered { text-align: center; margin-bottom: 8px; }
.certif-subtitle { text-align: center; font-size: 0.95rem; color: var(--text2); margin-bottom: 40px; }
.certif-list { display: flex; flex-direction: column; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }

/* Ligne standard */
.certif-row { display: flex; align-items: center; gap: 16px; padding: 18px 24px; background: var(--bg2); border-bottom: 1px solid var(--border); transition: background var(--transition); }
.certif-row:last-child { border-bottom: none; }

/* Ligne accordion RGPD */
.certif-accordion { flex-direction: column; padding: 0; }
.certif-main { display: flex; align-items: center; gap: 16px; padding: 18px 24px; width: 100%; cursor: pointer; transition: background var(--transition); }
.certif-main:hover { background: var(--bg3); }
.certif-accordion.open .certif-main { background: var(--bg3); }

/* Chevron animé */
.certif-chevron { color: var(--text2); flex-shrink: 0; transition: transform 0.3s ease; margin-left: auto; }
.certif-accordion.open .certif-chevron { transform: rotate(180deg); }

/* Panneau modules */
.certif-modules { width: 100%; border-top: 1px solid var(--border); background: var(--bg); padding: 20px 24px; }

/* Transition accordion */
.accordion-enter-active, .accordion-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.accordion-enter-from, .accordion-leave-to { opacity: 0; transform: translateY(-8px); }

/* Onglets modules */
.modules-tabs { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
.module-tab { background: var(--bg2); border: 1px solid var(--border); color: var(--text2); padding: 6px 14px; border-radius: 100px; font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: all var(--transition); }
.module-tab:hover { border-color: var(--accent); color: var(--text); }
.module-tab.active { background: var(--accent); border-color: var(--accent); color: #fff; }

/* Contenu module */
.module-content { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.module-info { display: flex; align-items: center; gap: 10px; flex: 1; }
.module-title { font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: var(--text); }

/* Infos certif */
.certif-logo { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.certif-logo img { width: 100%; height: 100%; object-fit: contain; }
.certif-info { flex: 1; display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.certif-name { font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; color: var(--text); }
.certif-source { font-size: 0.78rem; color: var(--text2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.certif-status { font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 100px; white-space: nowrap; flex-shrink: 0; }
.certif-status.obtained { background: rgba(34, 197, 94, 0.15); color: #22c55e; }
.certif-status.pending  { background: rgba(234, 179, 8, 0.12);  color: #eab308; }

/* Boutons */
.certif-actions { display: flex; gap: 6px; flex-shrink: 0; }
.certif-btn { display: inline-flex; align-items: center; gap: 5px; font-size: 0.72rem; font-weight: 600; padding: 4px 10px; border-radius: 100px; text-decoration: none; white-space: nowrap; transition: all var(--transition); border: 1px solid var(--border); color: var(--text2); background: var(--bg3); cursor: pointer; }
.certif-btn.cours:hover { border-color: var(--accent); color: var(--accent); }
.certif-btn.attestation { color: #22c55e; border-color: rgba(34,197,94,0.3); background: rgba(34,197,94,0.08); }
.certif-btn.attestation:hover { background: rgba(34,197,94,0.15); }
.certif-btn.disabled { opacity: 0.4; cursor: default; }

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 768px) {
  .section-inner { padding: 0 20px; }
  .carousel-item img { width: 56px; height: 56px; }
  .carousel-slide { gap: 36px; }
  .certif-source { display: none; }
}
@media (max-width: 600px) {
  .card-top { flex-direction: column; gap: 8px; }
  .parcours-tabs { gap: 8px; }
  .exp-section { padding-left: 16px; padding-right: 16px; }
  .certif-actions { flex-direction: column; }
}
</style>