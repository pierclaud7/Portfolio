<template>
  <div class="page">
    <section class="page-hero">
      <div class="hero-inner">
        <h1 class="page-title">Mentions légales</h1>
        <p class="page-desc">Informations légales relatives au site pierclaud.fr</p>
      </div>
    </section>

    <div class="page-content">

      <div class="ml-block">
        <h2>Éditeur du site</h2>
        <p>Ce site est édité par <strong>Pierclaud BOUKI</strong>, étudiant en BTS SIO SLAM à Mewo, Metz.</p>
        <p>Email : <a href="mailto:contact@pierclaud.fr">contact@pierclaud.fr</a></p>
      </div>

      <div class="ml-block">
        <h2>Hébergement</h2>
        <p>Ce site est hébergé par <strong>À compléter</strong>.</p>
      </div>

      <div class="ml-block">
        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble du contenu de ce site (textes, code, design) est la propriété exclusive de Pierclaud BOUKI. Toute reproduction sans autorisation écrite est interdite.</p>
      </div>

      <div class="ml-block">
        <h2>Données personnelles</h2>
        <p>Les données recueillies via le formulaire de contact sont uniquement utilisées pour répondre à vos demandes. Aucune donnée n'est transmise à des tiers. Conformément au RGPD, vous pouvez exercer vos droits à <a href="mailto:contact@pierclaud.fr">contact@pierclaud.fr</a>.</p>
      </div>

      <div class="ml-block last">
        <h2>Mise à jour</h2>
        <p>Dernière mise à jour : <strong>mars 2026</strong>.</p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.page-hero {
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
  padding: 120px 40px 60px;
  text-align: center;
}
.hero-inner { max-width: 600px; margin: 0 auto; }
.page-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 12px;
}
.page-desc { font-size: 0.95rem; color: var(--text2); line-height: 1.8; }

.page-content { max-width: 640px; margin: 0 auto; padding: 56px 40px 100px; }

.ml-block {
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--border);
}
.ml-block.last { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

.ml-block h2 {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 10px;
}
.ml-block p {
  font-size: 0.88rem;
  color: var(--text2);
  line-height: 1.8;
  margin-bottom: 4px;
}
.ml-block strong { color: var(--text); }
.ml-block a { color: var(--accent); text-decoration: none; }
.ml-block a:hover { text-decoration: underline; }

@media (max-width: 768px) {
  .page-hero { padding: 100px 20px 48px; }
  .page-content { padding: 40px 20px 80px; }
}
</style>