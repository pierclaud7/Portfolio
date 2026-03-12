<template>
  <div class="page">

    <!-- HERO -->
    <section class="page-hero">
      <div class="hero-inner">
        <h1 class="page-title">Contact</h1>
        <p class="page-desc">Une question ou une opportunité d'alternance ? N'hésitez pas à me contacter !</p>
      </div>
    </section>

    <div class="page-content">
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Nom</label>
            <input id="name" v-model="form.name" type="text" name="name" placeholder="Votre nom" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" name="email" placeholder="votre@email.com" required />
          </div>
        </div>
        <div class="form-group">
          <label for="subject">Sujet</label>
          <input id="subject" v-model="form.subject" type="text" name="subject" placeholder="Alternance, projet, question..." />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" name="message" rows="6" placeholder="Votre message..." required></textarea>
        </div>
        <button type="submit" class="btn-submit" :disabled="sending || sent">
          <template v-if="sending">
            <svg class="spin" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
            Envoi en cours...
          </template>
          <template v-else-if="sent">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Message envoyé !
          </template>
          <template v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Envoyer le message
          </template>
        </button>
        <p v-if="error" class="form-error">Une erreur est survenue. Réessayez ou contactez-moi par email.</p>
      </form>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const sending = ref(false)
const sent    = ref(false)
const error   = ref(false)

const form = reactive({ name: '', email: '', subject: '', message: '' })

async function submitForm() {
  sending.value = true
  error.value   = false
  try {
    const res = await fetch('https://formspree.io/f/xojkedrj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      sent.value = true
      form.name = form.email = form.subject = form.message = ''
      setTimeout(() => { sent.value = false }, 5000)
    } else {
      error.value = true
    }
  } catch {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
/* ── HERO ────────────────────────────────────────────────── */
.page-hero {
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
  padding: 120px 40px 60px;
  text-align: center;
}
.hero-inner { max-width: 600px; margin: 0 auto; }
.page-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 16px;
}
.page-desc { font-size: 1rem; color: var(--text2); line-height: 1.8; }

/* ── CONTENT ─────────────────────────────────────────────── */
.page-content { max-width: 620px; margin: 0 auto; padding: 56px 40px 100px; }

/* ── FORMULAIRE ──────────────────────────────────────────── */
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { display: flex; flex-direction: column; gap: 7px; }
.form-group label { font-size: 0.82rem; font-weight: 600; color: var(--text2); letter-spacing: 0.04em; }
.form-group input,
.form-group textarea {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 0.9rem;
  transition: all var(--transition);
  resize: vertical;
  outline: none;
}
.form-group input:focus,
.form-group textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--glow); }
.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text2); opacity: 0.5; }

.btn-submit {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--accent); color: #fff; border: none;
  padding: 13px 28px; border-radius: 100px;
  font-weight: 700; font-size: 0.9rem; cursor: pointer;
  transition: all var(--transition);
  box-shadow: 0 4px 20px var(--glow);
  font-family: var(--font-body);
  align-self: flex-start;
}
.btn-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 28px var(--glow); }
.btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

.form-error { font-size: 0.83rem; color: #f87171; }

@keyframes spin { to { transform: rotate(360deg); } }
.spin { animation: spin 0.8s linear infinite; }

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 768px) {
  .page-hero { padding: 100px 20px 48px; }
  .page-content { padding: 40px 20px 80px; }
  .form-row { grid-template-columns: 1fr; }
  .btn-submit { align-self: stretch; justify-content: center; }
}
</style>