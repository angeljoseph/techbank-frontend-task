<template>
  <section class="subheader-hero">
    <div class="subheader-card" :style="cardStyle">
    <div class="content">
    <div class=content-data>
    
    </div>
      <div class="subheader-toprow">
        <div class="top-image">
          <img :src="topImageSrc" alt="top" />
        </div>
        <div class="top-content">
         
          <p>{{ topText }}</p>
        </div>
      </div>
      </div>
      <!-- media/card content could go here -->
        <!-- centered title + image over the background -->
        <div class="card-center">
          <img v-if="centerImageSrc" :src="centerImageSrc" alt="center media" class="center-image" />
          <!-- center media: gif or mp4 -->
          <template v-if="centerMediaSrc">
            <video v-if="props.centerMediaType === 'mp4'" class="center-media" autoplay muted loop playsinline>
              <source :src="centerMediaSrc" type="video/mp4" />
            </video>
            <img v-else class="center-media" :src="centerMediaSrc" alt="center animation" />
          </template>
          <h2>{{ title }}</h2>
          <div class="card-row">
            <div class="row-text" v-if="subtitle">{{ subtitle }}</div>
            <div class="row-action">
              <button data-v-f93a2eb3="" @click="goToContact" class="footer-btn"><span data-v-f93a2eb3="">View Products</span><img data-v-f93a2eb3="" class="btn-arrow-img" src="../assets/img/Frame 24.png" alt="arrow"></button>
            </div>
          </div>
        </div>
    </div>
   
  </section>
</template>

<script setup>
const props = defineProps({
  bgImage: { type: String, default: '../assets/img/Mask group.png' },
  topImage: { type: String, default: '../assets/img/Group 1597883877.png' },
  topTitle: { type: String, default: 'At TechBank' },
  topText: { type: String, default: 'At TechBank, we’re pioneering the technologies of tomorrow. From blockchain to AI, we’re building the digital landscape of the future, today.' },
  centerImage: { type: String, default: '../assets/img/Group 1597883878.png' },
  centerMedia: { type: String, default: '../assets/img/comp.gif' },
  centerMediaType: { type: String, default: 'gif' },
  fullHeight: { type: Boolean, default: true },
  videoSrc: { type: String, default: '../assets/img/comp.gif' },
  gifSrc: { type: String, default: '' },
  poster: { type: String, default: '../assets/img/Group 1597883878.png' },
  title: { type: String, default: 'ENGINEERING\nTHE FUTURE' },
  subtitle: { type: String, default: 'Empowering Businesses Enabling Growth\nTechBank\u2019s Products for Success' }
})

import { computed, ref, onMounted, watch } from 'vue'

const goToContact = () => {
  // lightweight navigation without vue-router
  window.location.href = '/contact'
}

const cardHeight = ref(null)

const cardStyle = computed(() => {
  const path = props.bgImage || ''
  const url = path.startsWith('/') ? path : new URL(path, import.meta.url).href
  const style = {
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  if (props.fullHeight) {
    style.height = '100vh'
  } else if (cardHeight.value) {
    // cap at 90vh to avoid overly tall cards on small screens
    const max = window ? Math.round(window.innerHeight * 0.9) : null
    const h = cardHeight.value
    style.height = max ? `${Math.min(h, max)}px` : `${h}px`
  }
  return style
})





onMounted(() => loadBgHeight(props.bgImage))
watch(() => props.bgImage, (v) => loadBgHeight(v))

// load background image to measure its natural height so "cardStyle" can
// apply a reasonable non-full height when `fullHeight` is false.
function loadBgHeight(path) {
  try {
    const p = path || props.bgImage || ''
    if (!p) return
    const url = p.startsWith('/') ? p : new URL(p, import.meta.url).href
    const img = new Image()
    img.onload = () => {
      // naturalHeight gives the intrinsic height; store it so cardStyle can use it
      cardHeight.value = img.naturalHeight || null
    }
    img.onerror = () => {
      // ignore errors — we simply won't set cardHeight and fullHeight will apply
      cardHeight.value = null
    }
    img.src = url
  } catch (e) {
    // defensive: don't throw in lifecycle hooks
    cardHeight.value = null
  }
}

// resolve top image
import { computed as computed2 } from 'vue'
const topImageSrc = computed2(() => {
  const p = props.topImage || ''
  return p.startsWith('/') ? p : new URL(p, import.meta.url).href
})

// center image
const centerImageSrc = computed2(() => {
  const p = props.centerImage || ''
  return p ? (p.startsWith('/') ? p : new URL(p, import.meta.url).href) : ''
})

// center media (gif or video)
const centerMediaSrc = computed2(() => {
  const p = props.centerMedia || ''
  return p ? (p.startsWith('/') ? p : new URL(p, import.meta.url).href) : ''
})
</script>

<style scoped>
.subheader-hero {
    margin-top:80px;
  padding: 48px 16px;
  display: flex;
  justify-content: center;
  width: 100%;
}

/* apply the background to the card (recommended) */
.subheader-card {
  width: min(1272px, 95%);
  height: 420px;
  border-radius: 28px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.5);
  position: relative;
  overflow: hidden;
  display:flex;
  align-items:center;
  justify-content:center;
}
.media-wrap { position:absolute; inset:40px; display:flex; align-items:center; justify-content:center; }
.media { width:60%; height:60%; object-fit:contain; border-radius:12px; }
.card-content { position:absolute; bottom:32px; left:48px; color:#000; }
.card-content h2 { font-size:48px; letter-spacing:2px; color:#000; margin:0 0 8px 0; white-space:pre-line }
.card-content p { color:rgba(0,0,0,0.7); margin:0 }

.subheader-toprow { position:absolute; width:40%;top:50px; right:50px; height: 60px; display:flex; gap:12px; align-items:center; text-align:right }
.subheader-toprow .top-image img { height:60px;border-radius:50% }
.subheader-toprow .top-content h4 { margin:0; color:#fff; font-size:0.95rem }
.subheader-toprow .top-content p { margin:0; color:rgba(255,255,255,0.8); font-size:16px ;letter-spacing:0; font-weight:400; font-family: 'Ninetea';text-align: justify;   }
.content{
    padding:20px;
}
.card-center { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; pointer-events:none }
.card-center h2 { 
  color:#000; 
  font-family: 'NYXERIN';
  font-weight: 400; /* Regular */
  font-style: normal;
  font-size: 93.69px;
  line-height: 102px;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  margin:0; 
  pointer-events:auto;
  color:#000;
  /* leading-trim: NONE; (not standard CSS) */
}
.center-image { width:125px; max-width:36%; height:auto; object-fit:contain; margin-bottom:40px; pointer-events:auto }
.center-media { width: 250px;
  max-width: 60%; height:auto; margin-top:16px; pointer-events:auto; display:block; position:absolute; transform: rotate(25deg); transform-origin: center center; }
/* two-column row: left text, right button */
.card-row { display:flex; gap:20px; align-items:center; margin-top:24px; pointer-events:auto;width:40% }
.card-row .row-text { flex:1; color: rgba(0,0,0,0.85); font-size:18px; max-width:720px; text-align:center }
.card-row .row-action { flex:0 0 auto }
.primary-btn { background: #0b63ff; color:#fff; border:none; padding:12px 20px; border-radius:8px; font-weight:600; cursor:pointer }
.primary-btn:hover { filter:brightness(0.95) }

/* row-action button typography to match design */
.card-row .row-action .footer-btn {
  font-family: 'Ninetea', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 600;
  font-style: normal; /* 'Semi Bold' maps to weight 600 */
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
}
/* Example @font-face (uncomment and adjust path if you add the font file):
@font-face {
  font-family: 'Ninetea';
  src: url('/src/assets/fonts/Ninetea-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
*/

/* If you have NYXERIN font, add e.g.:
@font-face {
  font-family: 'NYXERIN';
  src: url('/src/assets/fonts/NYXERIN-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
*/

/* larger tablet / small desktop */
@media (max-width: 1200px) {
  .card-center h2 {
    font-size: 50.69px;
  }
  .card-row {
    width: 80%;
    flex-direction: column;
  }
  .subheader-toprow { display:none; }
}

/* mobile */
@media (max-width: 768px) {
  .subheader-card { height: 300px; border-radius:18px }
  .media { width:70%; height:60% }
  .card-content h2 { font-size:28px }
  .card-center h2 {
  font-size: 28.69px !important;
  }
}
</style>
