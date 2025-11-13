<template>
  <section class="blog-section">
    <div class="container">
      <div class="section-heading">
      <h2>Product Blog</h2>
      <p class="lead">Latest updates, case studies and product deep dives</p>
      </div>

    <div class="blog-slider">
      <button class="nav prev" @click="prev">‹</button>
      <div class="slider-viewport">
        <div class="slider-track" :style="trackStyle">
          <div class="slide" v-for="(item, i) in items" :key="i" :style="[getStyle(item.img), { flexBasis: (100/visible.value) + '%' }]">
            <div class="product-item">
              <div class="product-col" :style="getStyle(item.img)">
                <div class="product-overlay">
                  <div class="emblem">
                    <span>{{ item.emblem || item.title.charAt(0) }}</span>
                  </div>
                </div>
              </div>

              <div class="product-footer">
                <div class="footer-left">
                  <h4 class="footer-heading">{{ item.footerHeading || item.title }}</h4>
                  <p class="footer-text">{{ item.footerText || item.description }}</p>
                </div>
                <div class="footer-right">
                  <button class="footer-btn">
                    <span>{{ item.buttonLabel || 'Read' }}</span>
                    <img class="btn-arrow-img" :src="arrowSrc" alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="nav next" @click="next">›</button>
    </div>

    </div>

  </section>
</template>

<script setup>
import { reactive, ref, computed, onMounted, onUnmounted } from 'vue'

const items = reactive([
  {
    img: '../assets/img/Group 1171276082.png',
    title: 'Introducing TechBank Core',
    description: 'How our platform helps businesses scale with secure payments and modern APIs.'
  },
  {
    img: '../assets/img/Mask group-b1',
    title: 'Customer Story: Acme Inc',
    description: 'A look at how Acme reduced fraud and increased conversion with our tools.'
  },
  {
    img: '../assets/img/Mask group-b2',
    title: 'Product Deep Dive',
    description: 'Exploring the architecture behind our high-throughput transaction engine.'
  },
  /*
  {
    img: '../assets/img/Group 1171276082.png',
    title: 'Introducing TechBank Core',
    description: 'How our platform helps businesses scale with secure payments and modern APIs.'
  },
  {
    img: '../assets/img/Mask group-b1',
    title: 'Customer Story: Acme Inc',
    description: 'A look at how Acme reduced fraud and increased conversion with our tools.'
  },
  {
    img: '../assets/img/Mask group-b2',
    title: 'Product Deep Dive',
    description: 'Exploring the architecture behind our high-throughput transaction engine.'
  }
  */
])

const getStyle = (img) => {
  try {
    const url = img.startsWith('/') ? img : new URL(img, import.meta.url).href
    return {
      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.35)), url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  } catch (e) {
    return {}
  }
}

// slider state
const currentIndex = ref(0)
// initialize `visible` from the current window width (guarded for SSR / build)
const initialVisible = (typeof window !== 'undefined')
  ? (window.innerWidth >= 1200 ? 3 : (window.innerWidth >= 700 ? 2 : 1))
  : 3
const visible = ref(initialVisible)

const updateVisible = () => {
  const w = window.innerWidth
  // show 3 columns on large screens (>=1200), 2 on medium (>=700), 1 on small
  if (w >= 1200) visible.value = 3
  else if (w >= 700) visible.value = 2
  else visible.value = 1
}

onMounted(() => {
  updateVisible()
  window.addEventListener('resize', updateVisible)
  startAutoplay()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisible)
  stopAutoplay()
})

const maxIndex = computed(() => Math.max(0, items.length - visible.value))

const trackStyle = computed(() => {
  const percent = (100 / visible.value) * currentIndex.value
  return {
    width: `${(items.length / visible.value) * 100}%`,
    transform: `translateX(-${percent}%)`,
    transition: 'transform 400ms ease'
  }
})

function prev() {
  currentIndex.value = Math.max(0, currentIndex.value - 1)
}

function next() {
  currentIndex.value = Math.min(maxIndex.value, currentIndex.value + 1)
}

// autoplay
let autoplayTimer = null
function startAutoplay() {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    if (currentIndex.value >= maxIndex.value) currentIndex.value = 0
    else currentIndex.value += 1
  }, 4000)
}
function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

// arrow image reuse to match Products.vue
import arrowSrc from '@/assets/img/Vector1.png'
</script>

<style scoped>
.blog-section { padding: 48px 16px; display:flex; justify-content:center; width:80%; text-align:center }
.container { max-width:1200px; width:100% }
.section-heading { text-align: center; margin-bottom: 24px }
.section-heading h2 { font-family: 'NYXERIN'; font-size: 36px; margin:0 }
.section-heading .lead { color: rgba(0,0,0,0.6); margin-top:8px }

.blog-slider { display:flex; align-items:center; gap:12px; position:relative }
.blog-slider .nav { background: rgba(0,0,0,0.6); color:#fff; border:none; width:44px; height:44px; border-radius:50%; cursor:pointer }
.blog-slider .nav:hover { filter:brightness(1.05) }
.slider-viewport { overflow:hidden; flex:1 }
.slider-track { display:flex; gap:20px }
.slide { flex: 0 0 auto; height: 320px; border-radius: 16px; overflow: hidden; position: relative; display:flex; align-items:flex-end }
.slide-overlay { background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%); color: #fff; padding: 20px; width:100% }
.slide-overlay h3 { margin:0 0 8px 0 }
.slide-overlay p { margin:0; color: rgba(255,255,255,0.9) }

@media (max-width: 900px) {
  .slide { flex: 0 0 100%; height: 220px }
  .blog-slider .nav { display:none }
}

/* product-like column styles (copied from Products.vue) */
.product-item{ border: solid 1px #fff; border-radius: 20px; padding: 10px; }
.product-col { position:relative; min-height:300px; border-radius:12px; overflow:hidden; display:flex; align-items:flex-end }
.product-overlay { background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%); color:#fff; padding:20px; width:100% }
.emblem { position:absolute; bottom:12px; left:12px; background:rgba(255,255,255,0.12); color:#fff; padding:6px 10px; border-radius:999px }
.emblem-img { width:28px; height:28px; object-fit:contain; display:block }
.product-footer { display:flex; gap:16px; padding: 0px 20px; align-items:center; justify-content:space-between }
.footer-left { flex:1;text-align: left; }
.footer-heading { font-family: 'NYXERIN'; font-weight: 400; font-style: normal; font-size: 16px; letter-spacing: 0; text-transform: uppercase; margin: 0; color:#fff; }
.footer-text { font-family: 'Ninetea', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; font-weight: 400; font-style: normal; font-size: 14px; line-height: 100%; letter-spacing: -0.02em; margin: 4px 0 0 0; color: #C0C0C0; }
.footer-right { flex:0 0 auto }
.footer-btn { display:inline-flex; align-items:center; gap:8px; background: linear-gradient(103.84deg, #330694 17.98%, #8500A6 69.45%); color:#fff; padding:10px 16px; border-radius:8px; border:none; cursor:pointer; }
.btn-arrow-img { width:16px; height:16px; display:inline-block; transform: rotate(25deg); transform-origin: center center; transition: transform 120ms ease-in-out }
</style>
