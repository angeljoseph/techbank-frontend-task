<template class="container">
<SubHeader/>
  <section class="about">
  
    <About />
  </section>

  <section class="product">
    <Products />
  </section>
  <Slider/>
</template>

<script setup>
import About from '../components/About.vue'
import Products from '../components/Products.vue'
import Slider from '../components/Slider.vue'
import SubHeader from '../components/SubHeader.vue'

</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  width: 100%;
}
.product {
  display: flex;
  justify-content: center;
  width: 100%;
}
header { line-height: 1.5 }
</style>