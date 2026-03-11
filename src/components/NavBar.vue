<template>
  <nav :class="['navbar', { scrolled }]">
    <div class="nav-inner">
      <RouterLink to="/" class="nav-logo">
        <img src="/BKPB_Logo.png" alt="BKPB Logo" class="logo-img" />
      </RouterLink>

      <div class="nav-links" :class="{ open: menuOpen }">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" @click="menuOpen = false">
          {{ link.label }}
        </RouterLink>
      </div>

      <div class="nav-actions">
        <button class="theme-toggle" @click="$emit('toggle-theme')" :title="theme === 'dark' ? 'Mode clair' : 'Mode sombre'">
          <Transition name="icon" mode="out-in">
            <svg v-if="theme === 'dark'" key="moon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            <svg v-else key="sun" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          </Transition>
        </button>
        <button class="burger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps(['theme'])
defineEmits(['toggle-theme'])

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/bts-sio', label: 'BTS SIO' },
  { to: '/projets', label: 'Projets' },
  { to: '/veille', label: 'Veille Techno' },
  { to: '/contact', label: 'Contact' },
]

function onScroll() { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 16px 24px;
  transition: all 0.4s ease;
}
.navbar.scrolled { padding: 10px 24px; }

/* ── LIQUID GLASS ─────────────────────────────────────────── */
.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 8px 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
}
.navbar.scrolled .nav-inner {
  background: rgba(255, 255, 255, 0.08);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}
html[data-theme="light"] .nav-inner {
  background: rgba(255, 255, 255, 0.55);
  border-color: rgba(255, 255, 255, 0.7);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    inset 0 -1px 0 rgba(0, 0, 0, 0.04);
}
html[data-theme="light"] .navbar.scrolled .nav-inner {
  background: rgba(255, 255, 255, 0.7);
}

/* ── LOGO ─────────────────────────────────────────────────── */
.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}
.logo-img {
  height: 44px;
  width: 44px;
  object-fit: cover;
  border-radius: 50%;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.nav-logo:hover .logo-img { opacity: 0.8; transform: rotate(10deg); }
html[data-theme="light"] .logo-img { filter: invert(1); }

/* ── LIENS ────────────────────────────────────────────────── */
.nav-links { display: flex; gap: 2px; }
.nav-links a {
  color: var(--text2);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: 12px;
  transition: all 0.25s ease;
}
.nav-links a:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.08);
}
.nav-links a.router-link-exact-active {
  color: var(--accent);
  background: rgba(108, 99, 255, 0.12);
}
html[data-theme="light"] .nav-links a:hover { background: rgba(0, 0, 0, 0.05); }
html[data-theme="light"] .nav-links a.router-link-exact-active { background: rgba(80, 70, 229, 0.1); }

/* ── ACTIONS ──────────────────────────────────────────────── */
.nav-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

/* ── THEME TOGGLE ─────────────────────────────────────────── */
.theme-toggle {
  width: 36px; height: 36px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  color: var(--text2);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.25s ease;
}
.theme-toggle:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: rgba(108, 99, 255, 0.12);
  transform: rotate(15deg);
}
html[data-theme="light"] .theme-toggle {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.6);
}

/* ── ICON TRANSITION ──────────────────────────────────────── */
.icon-enter-active, .icon-leave-active { transition: all 0.2s ease; }
.icon-enter-from { opacity: 0; transform: rotate(-90deg) scale(0.5); }
.icon-leave-to   { opacity: 0; transform: rotate(90deg) scale(0.5); }

/* ── BURGER ───────────────────────────────────────────────── */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.burger span {
  display: block;
  width: 20px; height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s ease;
}
.burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── RESPONSIVE ───────────────────────────────────────────── */
@media (max-width: 768px) {
  .navbar { padding: 12px 16px; }
  .burger { display: flex; }
  .nav-links {
    display: none;
    position: fixed;
    top: 80px; left: 16px; right: 16px;
    flex-direction: column;
    gap: 4px;
    padding: 12px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
  html[data-theme="light"] .nav-links {
    background: rgba(255, 255, 255, 0.75);
    border-color: rgba(255, 255, 255, 0.8);
  }
  .nav-links.open { display: flex; }
  .nav-links a { padding: 12px 16px; border-radius: 12px; }
}
</style>