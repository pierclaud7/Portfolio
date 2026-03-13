<template>
  <footer class="footer">
    <div class="footer-inner">
      <span class="footer-logo">
        <img src="/BKPB_Logo.png" alt="BKPB" class="footer-logo-img" />
      </span>
      <p class="footer-copy">© 2026 Pierclaud BOUKI — Tous droits réservés</p>
      <div class="footer-right">
        <a href="https://linkedin.com/in/pierclaud-bouki" target="_blank" class="footer-link" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com/pierclaud7" target="_blank" class="footer-link" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          GitHub
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        <RouterLink to="/mentions-legales" class="mention-link">Mentions légales</RouterLink>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 40px 20px;
  margin-top: auto;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
}
.footer-logo { justify-self: start; display: flex; align-items: center; }
.footer-logo-img {
  height: 38px; width: 38px;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.footer-logo-img:hover { transform: rotate(10deg); opacity: 0.8; }
html[data-theme="light"] .footer-logo-img { filter: invert(1); }

.footer-copy {
  font-size: 0.82rem;
  color: var(--text2);
  text-align: center;
  justify-self: center;
}
.footer-right {
  display: flex;
  gap: 6px;
  justify-self: end;
}
.footer-link {
  display: inline-flex; align-items: center; gap: 7px;
  color: var(--text2); text-decoration: none;
  font-size: 0.82rem; font-weight: 500;
  padding: 7px 14px; border-radius: 100px;
  border: 1px solid var(--border);
  background: var(--bg2);
  transition: all var(--transition);
}
.footer-link:hover { color: var(--accent); border-color: var(--accent); }

.footer-bottom {
  max-width: 1100px;
  margin: 16px auto 0;
  padding-top: 14px;
  border-top: 1px solid var(--border);
  text-align: center;
}
.mention-link {
  font-size: 0.78rem;
  color: var(--text2);
  text-decoration: none;
  opacity: 0.6;
  transition: opacity var(--transition), color var(--transition);
}
.mention-link:hover { opacity: 1; color: var(--accent); }

@media (max-width: 600px) {
  .footer { padding: 24px 20px 16px; }
  .footer-inner { grid-template-columns: 1fr; gap: 12px; }
  .footer-logo { justify-self: center; }
  .footer-copy { justify-self: center; }
  .footer-right { justify-self: center; }
}
</style>