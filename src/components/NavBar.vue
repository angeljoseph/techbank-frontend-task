<template>
  <header class="navbar">
    <nav class="container">
      <!-- left: logo -->
    <div class="logo"  @click.prevent="goToHomeHash('#home')">

  <img src="/images/group-1.png" alt="logo" class="logo-img" />
    </div>

      <!-- center: nav links (hidden on small screens) -->
      <ul class="nav-links">
        <li><a @click.prevent="goToHomeHash('#home')">Home</a></li>
        <li><a @click.prevent="goToHomeHash('#about')">About</a></li>
        <li><a @click.prevent="goToHomeHash('#products')">Products</a></li>
        <li><a @click.prevent="goToHomeHash('#technologies')">Technologies</a></li>
        <li><a @click.prevent="goToHomeHash('#contact')">Contact</a></li>
      </ul>

      <!-- right: CTA and mobile toggle -->
      <div class="actions">
        <button class="cta" @click="goToContact">Contact Us</button>

        <!-- mobile toggle -->
        <button @click="toggleMenu" class="mobile-toggle">
          <span v-if="!menuOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </nav>

    <!-- mobile menu -->
    <div v-if="menuOpen" class="mobile-menu">
      <ul>
        <li><a @click.prevent="goToHomeHash('#home'); toggleMenu()">Home</a></li>
        <li><a @click.prevent="goToHomeHash('#about'); toggleMenu()">About</a></li>
        <li><a @click.prevent="goToHomeHash('#products'); toggleMenu()">Products</a></li>
        <li><a @click.prevent="goToHomeHash('#technologies'); toggleMenu()">Technologies</a></li>
        <li><a @click.prevent="goToHomeHash('#contact'); toggleMenu()">Contact</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// resolve logo asset so Vite includes it in the build
const logoSrc = new URL('../assets/Group (1).png', import.meta.url).href
const menuOpen = ref(false)
const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const goToContact = () => { router.push('/contact') }

function goToHomeHash(hash = '') {
  // navigate to home then set hash for in-page sections
  router.push({ path: '/', hash })
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0,0,0,0.8);
  border-top: 2px solid rgba(30,144,255,0.12);
  border-bottom: 2px solid rgba(30,144,255,0.12);
  z-index: 50;
}


/* layout: 3 columns on medium+, stacked on small */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 16px;
  display: grid;
  /* left: logo (auto), center: nav (flex), right: actions (auto) */
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  min-width:1200px;
}

/* left */
.logo { display:flex; align-items:center; gap:8px; justify-self: start }
.brand { font-weight:600; color:#fff; }

/* center: hide on small screens */
.nav-links { display:flex; justify-content:center; gap:20px; list-style:none; margin:0; padding:0; }
  .nav-links a { color:#fff; text-decoration:none; opacity:0.95; font-size:14px; line-height:1; letter-spacing:0; font-weight:600; font-family: 'Ninetea', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; }

/* Example @font-face (uncomment and adjust path if you add the font file):
@font-face {
  font-family: 'Ninetea';
  src: url('/src/assets/fonts/Ninetea-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
*/

/* right actions */
.actions { display:flex; justify-content:flex-end; gap:8px; align-items:center; justify-self: end }
.cta { background:transparent; border: 1px solid rgb(247 253 254);
  color: #fff;
  padding: 6px 12px;
  border-radius: 56px;
  /* typography requested by user */
  font-family: 'Ninetea', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  vertical-align: middle;
  text-transform: uppercase;
}
.login { background:#7c3aed; color:#fff; padding:8px 14px; border-radius:9999px; border:none; }

/* mobile toggle: show only on small screens */
.mobile-toggle { display:none; background:transparent; border:none; color:#fff; font-size:18px; }
.mobile-menu { display:none; }

/* responsive */
@media (max-width: 767px) {
  .container { grid-template-columns: auto 1fr auto;min-width: auto; }
  .nav-links { display:none; }
  .login { display:none; }
  .mobile-toggle { display:inline-block; }
  .mobile-menu { display:block; background:rgba(0,0,0,0.95); padding:12px; }
  .mobile-menu ul { list-style:none; padding:0; margin:0; text-align:center; }
  .mobile-menu li { padding:8px 0; }
  .mobile-menu a { color:#fff; text-decoration:none; font-size:14px; line-height:1; letter-spacing:0; font-weight:600; font-family: 'Ninetea', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; }
}
</style>