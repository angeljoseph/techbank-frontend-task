<template>
  <section class="about-section">
    <div class="container">
      <h3 class="about-heading">{{ heading }}</h3>
      <p class="about-desc">{{ description }}</p>

      <div class="features-row">
        <div v-for="(f, i) in featureImages" :key="i" class="feature-item">
          <div v-if="f.stat" class="feature-stat">{{ f.stat }}</div>
          <img v-else-if="f.src" :src="f.src" alt="feature" class="feature-image" />
          <div class="feature-text">{{ f.title }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  heading: { type: String, default: 'About' },
  description: { type: String, default: 'TechBank builds reliable, scalable solutions that help organizations adopt modern technologies. We focus on developer-first tools, enterprise integrations, and secure operations to accelerate product delivery.' },
  features: { type: Array, default: () => ([
    { stat: '4', title: 'Products' },
    { stat: '250+', title: 'Active Users' },
    { stat: '1M+', title: 'Downloads' }
  ]) }
})

// resolve feature image URLs for Vite
import { computed as _computed } from 'vue'
const featureImages = _computed(() => (props.features || []).map(f => ({
  title: f.title,
  stat: f.stat || '',
  src: f.img ? (f.img.startsWith('/') ? f.img : new URL(f.img, import.meta.url).href) : ''
})))
</script>

<style scoped>
.about-section { padding: 64px 16px; display:flex; justify-content:center;color:#fff;text-align:center;width: 70%;
    display: flex; }
.container { max-width:1024px; width:100%; }
.about-heading { 
  font-family: 'NYXERIN';
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  line-height: 54.77px;
  letter-spacing: 0;
  vertical-align: middle;
  text-transform: uppercase;
  margin:0 0 16px 0; color:#fff;
}

/* If you have the NYXERIN font file, register it in a global stylesheet, for example:
@font-face {
  font-family: 'NYXERIN';
  src: url('/src/assets/fonts/NYXERIN-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
*/
.about-desc {
  font-family: 'Ninetea', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  text-align: center;
  margin: 0;
  color: #C0C0C0;
}

/* If you have Ninetea font files, register them in a global CSS file, for example:
@font-face {
  font-family: 'Ninetea';
  src: url('/src/assets/fonts/Ninetea-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
*/

@media (max-width:768px) {
  .about-section { padding: 40px 12px }
  .about-heading { font-size:22px }
  .about-desc { font-size:15px }
}

/* features row: 3 columns, each with image + text */
.features-row { display:grid; grid-template-columns: repeat(3, 1fr); gap:24px; margin-top:32px; align-items:start }
.feature-item { display:flex; flex-direction:column; align-items:center; text-align:center }
.feature-image { width:84px; height:84px; object-fit:contain; margin-bottom:12px }
.feature-text {
  font-family: Ninetea;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.02em; /* approx -2% */
 color: #C0C0C0;

}

.feature-stat {
  font-family: NYXERIN;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  line-height: 54.77px;
  letter-spacing: 0;
  vertical-align: middle;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 8px;
}

@media (max-width:768px) {
  .features-row { grid-template-columns: 1fr; gap:16px }
  .feature-image { width:64px; height:64px }
}
</style>
