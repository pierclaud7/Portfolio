import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import BtsSioView from './views/BtsSioView.vue'
import ProjetsView from './views/ProjetsView.vue'
import VeilleView from './views/VeilleView.vue'
import ContactView from './views/ContactView.vue'
import MentionsLegalesView from './views/MentionsLegalesView.vue'

const routes = [
  { path: '/',                component: HomeView           },
  { path: '/bts-sio',         component: BtsSioView         },
  { path: '/projets',         component: ProjetsView        },
  { path: '/veille',          component: VeilleView         },
  { path: '/contact',         component: ContactView        },
  { path: '/mentions-legales', component: MentionsLegalesView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')