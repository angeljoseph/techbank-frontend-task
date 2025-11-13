import { createRouter, createWebHistory } from 'vue-router'
// existing project uses `src/view` directory (not `src/views`) — import actual files
import Home from '@/view/Home.vue'
// route components
import About from '@/view/AboutView.vue'
import ContactPage from '@/components/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
