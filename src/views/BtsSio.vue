<template>
  <div class="page">

    <!-- HERO -->
    <section class="page-hero">
      <div class="hero-inner">
        <h1 class="page-title">BTS SIO</h1>
        <p class="page-desc">Le BTS SIO <em>(Services Informatiques aux Organisations)</em> est une formation de deux ans permettant de se spécialiser en développement logiciel ou en réseaux informatiques. Je suis la spécialité <strong>SLAM</strong> à Mewo, Metz.</p>
        <div class="hero-cta">
          <a href="./Tableau.pdf" target="_blank" class="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Tableau de synthèse
          </a>
        </div>
      </div>
    </section>

    <div class="page-content">

      <!-- OPTIONS -->
      <section class="content-section">
        <h2 class="section-title">Les options du BTS SIO</h2>
        <div class="options-grid">

          <div class="option-card active">
            <div class="option-badge">Ma spécialité</div>
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" alt="Code SLAM" class="option-img" />
            <div class="option-body">
              <div class="option-header">
                <span class="option-tag accent">SLAM</span>
                <h3>Solutions Logicielles et Applications Métiers</h3>
              </div>
              <p class="option-desc">Cette option forme aux bases de la programmation logicielle et du développement web. Elle permet d'apprendre à concevoir, développer et maintenir des applications métiers.</p>
              <div class="option-divider"></div>
              <h4 class="option-sub">Débouchés professionnels</h4>
              <ul class="option-list">
                <li v-for="d in debouchesSLAM" :key="d"><span class="list-dot"></span>{{ d }}</li>
              </ul>
            </div>
          </div>

          <div class="option-card">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" alt="Réseau SISR" class="option-img" />
            <div class="option-body">
              <div class="option-header">
                <span class="option-tag">SISR</span>
                <h3>Solutions d'Infrastructure Systèmes et Réseaux</h3>
              </div>
              <p class="option-desc">Cette option forme à la mise en place et la maintenance des infrastructures réseaux. Elle permet d'apprendre à administrer et sécuriser les systèmes informatiques.</p>
              <div class="option-divider"></div>
              <h4 class="option-sub">Débouchés professionnels</h4>
              <ul class="option-list">
                <li v-for="d in debouchesSISR" :key="d"><span class="list-dot"></span>{{ d }}</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <!-- EPREUVES -->
      <section class="content-section">
        <h2 class="section-title">Les épreuves du BTS SIO</h2>
        <p class="section-desc">Le BTS SIO comprend 7 épreuves dont 5 communes aux deux options et 1 épreuve de spécialité selon votre choix (SISR ou SLAM).</p>
        <div class="epreuves-table">
          <div class="table-header">
            <span>Code</span>
            <span>Épreuve</span>
            <span>Coeff.</span>
            <span>Durée</span>
            <span>Format</span>
          </div>
          <div v-for="ep in epreuves" :key="ep.title"
            class="table-row"
            :class="{ highlight: ep.highlight }"
          >
            <span class="ep-code">{{ ep.code }}</span>
            <span class="ep-title-cell">
              {{ ep.title }}
              <span v-if="ep.highlight" class="ep-badge">Ma spécialité</span>
            </span>
            <span class="ep-center">{{ ep.coeff }}</span>
            <span class="ep-muted">{{ ep.duree }}</span>
            <span class="ep-format">{{ ep.format }}</span>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
const debouchesSLAM = [
  'Développeur informatique',
  'Développeur d\'applications web',
  'Analyste programmeur',
  'Technicien informatique',
  'Responsable des services applicatifs',
  'Informaticien d\'études',
]

const debouchesSISR = [
  'Administrateur systèmes et réseaux',
  'Technicien systèmes et réseaux',
  'Pilote d\'exploitation',
  'Gestionnaire du parc informatique',
  'Technicien d\'infrastructure',
  'Analyste d\'exploitation informatique',
]

const epreuves = [
  { code: 'E1', title: 'Culture générale et expression',                                    coeff: 2, duree: '3h',                        format: 'Écrit'         },
  { code: 'E2', title: 'Expression et communication en langue anglaise',                    coeff: 2, duree: '2h (écrit) + 20min (oral)', format: 'Écrit et Oral' },
  { code: 'E3', title: 'Mathématiques pour l\'informatique',                                coeff: 3, duree: '2h',                        format: 'Écrit'         },
  { code: 'E4', title: 'Culture économique, managériale et juridique pour l\'informatique', coeff: 3, duree: '4h',                        format: 'Écrit'         },
  { code: 'E5', title: 'Support et mise à disposition des services informatiques',          coeff: 4, duree: '40min',                     format: 'Oral'          },
  { code: 'E6', title: 'Conception et développement d\'applications (SLAM)',                coeff: 4, duree: '40min (1h30 préparation)',  format: 'Pratique', highlight: true },
  { code: 'E6', title: 'Administration des systèmes et des réseaux (SISR)',                 coeff: 4, duree: '40min (1h30 préparation)',  format: 'Pratique'      },
  { code: 'E7', title: 'Cybersécurité des services informatiques',                          coeff: 4, duree: '4h',                        format: 'Écrit'         },
]
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
.page-desc { font-size: 1.05rem; color: var(--text2); line-height: 1.8; margin-bottom: 32px; }
.page-desc strong { color: var(--text); }
.hero-cta { display: flex; justify-content: center; }
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--accent); color: #fff; text-decoration: none;
  padding: 12px 28px; border-radius: 100px; font-weight: 600; font-size: 0.9rem;
  transition: all var(--transition); box-shadow: 0 4px 20px var(--glow);
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px var(--glow); }

/* ── CONTENT ─────────────────────────────────────────────── */
.page-content { max-width: 900px; margin: 0 auto; padding: 0 40px 100px; }
.content-section { padding-top: 64px; }
.section-title {
  font-family: var(--font-display); font-size: 1.6rem; font-weight: 800;
  color: var(--text); margin-bottom: 8px; text-align: center;
}
.section-desc { font-size: 0.95rem; color: var(--text2); margin-bottom: 28px; line-height: 1.7; text-align: center; }

/* ── OPTIONS ─────────────────────────────────────────────── */
.options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 24px; }
.option-card {
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: var(--radius); overflow: hidden; position: relative;
  transition: all var(--transition);
}
.option-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.2); }
.option-card.active { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent), 0 8px 32px var(--glow); }
.option-badge {
  position: absolute; top: 12px; left: 12px; z-index: 2;
  background: var(--accent); color: #fff;
  font-size: 0.68rem; font-weight: 700; padding: 3px 10px;
  border-radius: 100px; letter-spacing: 0.05em; text-transform: uppercase;
}
.option-img { width: 100%; height: 180px; object-fit: cover; display: block; filter: brightness(0.75); transition: filter var(--transition); }
.option-card:hover .option-img { filter: brightness(0.9); }
.option-body { padding: 24px; }
.option-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
.option-tag {
  font-family: var(--font-display); font-size: 0.72rem; font-weight: 800;
  letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 12px;
  border-radius: 6px; background: var(--bg3); color: var(--text2);
  border: 1px solid var(--border); flex-shrink: 0;
}
.option-tag.accent { background: var(--glow); color: var(--accent); border-color: var(--accent); }
.option-header h3 { font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; color: var(--text); }
.option-desc { font-size: 0.87rem; color: var(--text2); line-height: 1.7; }
.option-divider { height: 1px; background: var(--border); margin: 16px 0; }
.option-sub { font-family: var(--font-display); font-size: 0.78rem; font-weight: 700; color: var(--text2); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 10px; }
.option-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.option-list li { display: flex; align-items: center; gap: 8px; font-size: 0.84rem; color: var(--text2); }
.list-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

/* ── EPREUVES TABLE ──────────────────────────────────────── */
.epreuves-table {
  margin-top: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}
.table-header {
  display: grid;
  grid-template-columns: 60px 1fr 70px 200px 120px;
  padding: 12px 20px;
  background: var(--bg3);
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text2);
  border-bottom: 1px solid var(--border);
  gap: 8px;
}
.table-row {
  display: grid;
  grid-template-columns: 60px 1fr 70px 200px 120px;
  padding: 14px 20px;
  align-items: center;
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
  transition: background var(--transition);
  gap: 8px;
}
.table-row:last-child { border-bottom: none; }
.table-row:hover { background: var(--bg3); }
.table-row.highlight { background: color-mix(in srgb, var(--accent) 5%, var(--bg2)); }
.table-row.highlight:hover { background: color-mix(in srgb, var(--accent) 8%, var(--bg2)); }
.ep-code { font-family: var(--font-display); font-weight: 800; font-size: 0.85rem; color: var(--accent); }
.ep-title-cell { font-size: 0.88rem; color: var(--text); display: flex; align-items: center; gap: 8px; flex-wrap: wrap; line-height: 1.4; }
.ep-center { font-size: 0.88rem; color: var(--text); text-align: center; }
.ep-muted { font-size: 0.82rem; color: var(--text2); }
.ep-format { font-size: 0.82rem; color: var(--text2); }
.ep-badge {
  font-size: 0.65rem; font-weight: 700; color: var(--accent);
  background: var(--glow); padding: 2px 8px; border-radius: 100px;
  border: 1px solid var(--accent); white-space: nowrap;
}

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 768px) {
  .page-hero { padding: 100px 20px 48px; }
  .page-content { padding: 0 20px 80px; }
  .options-grid { grid-template-columns: 1fr; }
  .table-header { display: none; }
  .table-row {
    grid-template-columns: 48px 1fr;
    grid-template-rows: auto auto;
    gap: 4px;
  }
  .table-row .ep-center,
  .table-row .ep-muted,
  .table-row .ep-format { display: none; }
}
</style>