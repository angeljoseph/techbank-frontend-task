import { createRouter, createWebHistory } from 'vue-router'
// project views live in `src/view`
import Home from '@/view/Home.vue'
import AboutView from '@/view/AboutView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
