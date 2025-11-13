<template>
  <section class="products-section">
    <div class="container">
     <p class="products-sub">{{ subheading }}</p>
      <h2 class="products-heading">{{ heading }}</h2>
     

      <div class="products-grid">
        <div v-for="(p, i) in columns" :key="i" class="product-item">
          <div class="product-col" :style="getColStyle(p)">
            <div class="product-overlay">
              <div class="emblem">
                <img v-if="getEmblemSrc(p)" :src="getEmblemSrc(p)" alt="emblem" class="emblem-img" />
                <span v-else>{{ p.emblem }}</span>
              </div>
              
            </div>
          </div>

          <div class="product-footer">
            <div class="footer-left">
              <h4 class="footer-heading">{{ p.footerHeading || p.title }}</h4>
              <p class="footer-text">{{ p.footerText || p.description }}</p>
            </div>
            <div class="footer-right">
              <button class="footer-btn">
                <span>{{ p.buttonLabel || 'Learn more' }}</span>
                <img class="btn-arrow-img" :src="arrowSrc" alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  heading: { type: String, default: 'Products' },
  subheading: { type: String, default: 'Innovative' },
  columns: { type: Array, default: () => ([
  { img: '../assets/img/Image0004.png', emblem: 'A', emblemImg: '../assets/img/Vector.png', title: 'Product A', description: 'Fast, secure integrations for enterprises.', footerHeading: 'dwallet', footerText: 'Enterprise-grade integrations for reliability', buttonLabel: 'Get started' },
  { img: '../assets/img/Mask groupmobile.png', emblem: 'B', emblemImg: '../assets/img/Group 1171276123.png', title: 'Product B', description: 'Tools for developers to ship faster.', footerHeading: 'DBANK ', footerText: 'APIs, SDKs, and CLIs for productivity', buttonLabel: 'Try now' }
  ]) }
})

// helper to resolve image URLs for Vite
// helper to resolve image URLs for Vite
import { computed as _computed } from 'vue'
const getColStyle = (p) => {
  const img = p.img || ''
  const url = img && !img.startsWith('/') ? new URL(img, import.meta.url).href : img
  return { backgroundImage: url ? `url(${url})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }
}

// helper for emblem image URL
const getEmblemSrc = (p) => {
  const e = p.emblemImg || ''
  return e ? (e.startsWith('/') ? e : new URL(e, import.meta.url).href) : ''
}

// arrow image source (resolved at build time)
const arrowSrc = new URL('../assets/img/Vector1.png', import.meta.url).href
</script>

<style scoped>
.products-section { padding: 64px 16px; display:flex; justify-content:center;width:80%;text-align:center }
.container { max-width:1200px; width:100% }
.products-heading {
  font-family: 'NYXERIN';
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  line-height: 54.77px;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 24px 0;
  color:#fff;
}
.products-sub {
  font-family: 'Ninetea';
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: -0.02em; /* approx -2% */
  color: #BB83FF;
  margin: 0 0 8px 0;
}
.products-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px }
.product-col { position:relative; min-height:300px; border-radius:12px; overflow:hidden; display:flex; align-items:flex-end }
.product-overlay { background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%); color:#fff; padding:20px; width:100% }
.emblem { position:absolute; bottom:12px; left:12px; background:rgba(255,255,255,0.12); color:#fff; padding:6px 10px; border-radius:999px }
.emblem-img { width:28px; height:28px; object-fit:contain; display:block }
.product-title { margin:0 0 8px 0 }
.product-desc { margin:0 }
.product-footer { display:flex; gap:16px; padding: 0px 20px; align-items:center; justify-content:space-between }
.footer-left { flex:1;text-align: left; }
.footer-heading {
  font-family: 'NYXERIN';
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0;
  text-transform: uppercase;
  margin: 0;
  color:#fff;
}
.footer-text {
  font-family: 'Ninetea', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.02em;
  margin: 4px 0 0 0;
  color: #C0C0C0;
}
.footer-right { flex:0 0 auto }
.footer-btn {
  display:inline-flex; align-items:center; gap:8px;
  background: linear-gradient(103.84deg, #330694 17.98%, #8500A6 69.45%);
  color:#fff; padding:10px 16px; border-radius:8px; border:none; cursor:pointer;
}
.product-item{
        border: solid 1px #fff;
    border-radius: 20px;
    padding: 10px;
}
.btn-arrow-img { width:16px; height:16px; display:inline-block; transform: rotate(25deg); transform-origin: center center; transition: transform 120ms ease-in-out }

@media (max-width:768px) {
  .products-grid { grid-template-columns:1fr; }
}
</style>
