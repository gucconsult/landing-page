<template>
  <Navbar />
  <main class="mt-20">
    <PricingList />
    <AboutUs />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
import PricingList from '~/components/PricingList';
import AboutUs from '~/components/AboutUs.vue';
</script>