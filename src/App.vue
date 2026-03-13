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
