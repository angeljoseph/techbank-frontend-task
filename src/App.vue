<script setup>
import TheWelcome from './components/TheWelcome.vue'
import NavBar from './components/NavBar.vue'
import About from './components/About.vue'
import Products from './components/Products.vue'
import Footer from './components/Footer.vue'
</script>

<template >

   <NavBar/>


  
 

  <!-- Hero with background video -->


  <main>
   <router-view></router-view>
   
  </main>
 
  <Footer/>

</template>

<style scoped>
main{
  width:100%;
}


.hero {
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
}
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-content { color: #fff; text-align: center; }
.hero-content h1 { font-size: 2rem; margin-bottom: 0.5rem }
.hero-content p { opacity: 0.9 }

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
  display: flex;
  place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
