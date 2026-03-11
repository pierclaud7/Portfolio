<template>
  <div class="app">
    <NavBar :theme="theme" @toggle-theme="toggleTheme" />
    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

const theme = ref('dark')

function applyTheme(val) {
  document.documentElement.setAttribute('data-theme', val)
}

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
}

watch(theme, applyTheme)

onMounted(() => {
  const saved = localStorage.getItem('theme') || 'dark'
  theme.value = saved
  applyTheme(saved)
})
</script>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --radius: 12px;
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* DARK THEME — défaut */
html, html[data-theme="dark"] {
  --bg: #0a0a0f;
  --bg2: #111118;
  --bg3: #1a1a24;
  --border: rgba(255,255,255,0.08);
  --text: #f0f0f5;
  --text2: #9090a8;
  --accent: #6c63ff;
  --accent2: #ff6584;
  --glow: rgba(108, 99, 255, 0.3);
}

/* LIGHT THEME */
html[data-theme="light"] {
  --bg: #f5f5fa;
  --bg2: #ffffff;
  --bg3: #eaeaf2;
  --border: rgba(0,0,0,0.1);
  --text: #0a0a1a;
  --text2: #50506a;
  --accent: #5046e5;
  --accent2: #e5466b;
  --glow: rgba(80, 70, 229, 0.15);
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  transition: background var(--transition), color var(--transition);
  overflow-x: hidden;
}

.app { min-height: 100vh; display: flex; flex-direction: column; }
main { flex: 1; }

/* Page transitions */
.page-enter-active, .page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-enter-from { opacity: 0; transform: translateY(12px); }
.page-leave-to { opacity: 0; transform: translateY(-12px); }

/* Shared section styles */
.section { padding: 80px 24px; max-width: 1100px; margin: 0 auto; }
.section-tag {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--glow);
  padding: 4px 14px;
  border-radius: 100px;
  margin-bottom: 16px;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 12px;
}
.section-subtitle {
  font-size: 1.1rem;
  color: var(--text2);
  max-width: 500px;
  margin-bottom: 48px;
}

/* Fade-in animation */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: fadeUp 0.6s ease forwards; }

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }
</style>
