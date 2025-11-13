<template>
  <footer class="site-footer" :style="{ backgroundImage: `linear-gradient(rgb(30 30 30 / 99%), rgb(30 30 30 / 21%)), url(${footerBg})` }">
    <div class="container">
      <div class="footer-header">
        <div class="header-left">
          <div class="logo">
  <img src="../assets/Group (1).png" alt="logo" class="logo-img" />
      </div>
        </div>
        <div class="header-right">
          <p>support@techbank.example</p>
        </div>
      </div>

      <div class="footer-columns">
        <div class="col col-wide">
          <h4 class="footer-h4">Engineering <br/>the Future</h4>
          <div class="footer-cta-wrap">
            <button class="footer-btn footer-cta">
              <span>Contact Us</span>
              <img class="btn-arrow-img" :src="arrowSrc" alt="arrow" />
            </button>
          </div>
        </div>
        <div class="col">
          <h4 class="under">Products</h4>
          <ul>
            <li>dwallet</li>
            <li>dBank</li>
            <li>APIs</li>
          </ul>
        </div>
        <div class="col">
          <h4 class="under">Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Docs</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="bottom-col social">
          <a href="#" aria-label="x" class="social-link">
            <img src="../assets/img/x.png" alt="X" class="social-icon" />
          </a>
          <a href="#" aria-label="linkedin" class="social-link">
            <img src="../assets/img/LinkedinLogo.png" alt="LinkedIn" class="social-icon" />
          </a>
          <a href="#" aria-label="instagram" class="social-link">
            <img src="../assets/img/instagram.png" alt="Instagram" class="social-icon" />
          </a>
           <a href="#" aria-label="youtube" class="social-link">
            <img src="../assets/img/youtube.png" alt="Youtube" class="social-icon" />
          </a>
        </div>
        <div class="bottom-col date">© 2025 Techbank</div>
        <div class="bottom-col actions">
          <button class="btn ghost">Privacy Policy</button>
          <button class="btn ghost">Terms and Conditions</button>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
// small presentational footer — resolve background image for Vite
const footerBg = new URL('../assets/img/Group 1597883874.png', import.meta.url).href
// provide today's date for the footer-bottom
const today = new Date().toLocaleDateString();
// arrow image for CTA (reuse product arrow)
const arrowSrc = new URL('../assets/img/Vector1.png', import.meta.url).href
</script>

<style scoped>
.site-footer { background: #0b0b0b; color:#fff; padding:48px 16px; background-size: cover; background-position: center }
.container { max-width:1200px; margin:0 auto }
.footer-header { display:flex; justify-content:space-between; gap:20px; margin-bottom:24px }
.header-left h3, .header-right h3 { margin:0 0 6px 0 }
.header-left p { margin:0; color: #C0C0C0 }
.header-right p {
  margin: 0;
  color: #C0C0C0;
  font-family: 'Ninetea';
  font-weight: 500;
  font-style: normal; /* "Medium" is not a valid CSS font-style; use normal */
  font-size: 18px;
  line-height: 25.9px;
  letter-spacing: 0px;
  text-align: right;
  text-transform: lowercase;
}
.footer-h4
{
    font-family: 'NYXERIN';
    font-weight: 400;
    font-style: normal;
    font-size: 32px;
    /* line-height: 54.77px; */
    /* letter-spacing: 0; */
    /* text-align: center; */
    text-transform: uppercase;
    margin: 0 0 24px 0;
    color: #fff;
}
.cta{
    background: transparent;
    border: 1px solid rgb(247 253 254);
    color: #fff;
    padding: 6px 12px;
    border-radius: 56px;
    font-family: 'Ninetea';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0;
    vertical-align: middle;
    text-transform: uppercase;
}
.footer-cta-wrap { margin-top: 12px }
.footer-cta { display:inline-flex; align-items:center; gap:8px; padding:10px 16px; border-radius:8px; border:none; cursor:pointer }
.footer-cta { background: linear-gradient(103.84deg, #330694 17.98%, #8500A6 69.45%); color:#fff }
.footer-cta .btn-arrow-img { width:16px; height:16px; transform: rotate(25deg) }
.footer-columns { display:grid; grid-template-columns: 2fr 1fr 1fr; gap:24px }
.col h4 { margin:0 0 8px 0 }
.col p, .col ul { margin:0; color:#C0C0C0 }
.col ul { list-style:none; padding:0 }
.col ul li { margin:6px 0 }

/* Apply Ninetea font styles to the last two footer columns (Products & Resources) */
.footer-columns .col:nth-child(2) h4,
.footer-columns .col:nth-child(3) h4,
.footer-columns .col:nth-child(2) ul,
.footer-columns .col:nth-child(3) ul {
  font-family: 'Ninetea';
  font-weight: 500;
  /* 'Medium' is not a CSS font-style value; keep normal and rely on the font-weight */
  font-style: normal;
  font-size: 18px;
  vertical-align: middle;
  color: #C0C0C0;
}

.footer-columns .col:nth-child(2) h4,
.footer-columns .col:nth-child(3) h4 {
  margin-bottom: 8px;
}
.under
{
    text-decoration:underline
}

@media (max-width: 900px) {
  .footer-header { flex-direction:column; align-items:flex-start }
  .footer-columns { grid-template-columns:1fr; }
}

/* footer bottom row */
.footer-bottom { display:grid; grid-template-columns: 1fr 1fr 1fr; gap:16px; margin-top:54px; align-items:center }
.footer-bottom .bottom-col { color: #C0C0C0 }
.footer-bottom .social { display:flex; gap:12px }
.social-link { color: #C0C0C0; text-decoration:none; font-family: 'Ninetea'; font-weight: 400 }
.footer-bottom .date { text-align:center }
.footer-bottom .actions { display:flex; gap:8px; justify-content:flex-end }
.btn { padding:6px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); background:transparent; color:#fff }
.btn.primary { background: #1FA2A2; border-color: transparent }
.btn.ghost { background: transparent }
.social-icon { width:20px; height:20px; display:inline-block }

@media (max-width: 700px) {
  .footer-bottom { grid-template-columns: 1fr; gap:12px; text-align:center }
  .footer-bottom .actions { justify-content:center }
}
</style>
