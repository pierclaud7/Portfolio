import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

/* IMPORTS DES STYLES */
import './styles/base.css'
import './styles/layout.css'
import './styles/animations.css'

/* IMPORTS DES VUES */
import Home           from './views/Home.vue'
import BtsSio         from './views/BtsSio.vue'
import Projets        from './views/Projets.vue'
import Veille         from './views/Veille.vue'
import Contact        from './views/Contact.vue'
import MentionsLegales from './views/MentionsLegales.vue'

/* DÉFINITION DES ROUTES */
const routes = [
  { path: '/',                component: Home            },
  { path: '/bts-sio',         component: BtsSio          },
  { path: '/projets',         component: Projets         },
  { path: '/veille',          component: Veille          },
  { path: '/contact',         component: Contact         },
  { path: '/mentions-legales', component: MentionsLegales },
]

/* CRÉATION DU ROUTEUR */
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

/* CRÉATION DE L'APPLICATION */
const app = createApp(App)
app.use(router)
app.mount('#app')