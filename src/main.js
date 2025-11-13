import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// attempt to load router dynamically. If `vue-router` isn't installed the
// static import in `src/router/index.js` will fail during Vite import-analysis.
// Using dynamic import here lets the app mount even without the dependency.
;(async () => {
	try {
		// eslint-disable-next-line no-undef
		const { default: router } = await import('./router')
		if (router && typeof router === 'object' && typeof router.install === 'function') {
			// router appears to be a plugin (unlikely) — use it
			app.use(router)
		} else if (router && typeof router === 'object') {
			// common usage: the router instance
			app.use(router)
		}
	} catch (e) {
		// ignore: router not present or vue-router not installed. App will still mount.
		// console.warn('Router not available:', e)
	} finally {
		app.mount('#app')
	}
})()
