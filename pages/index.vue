<template>
  <Navbar />
  <main class="mt-20">
    <PricingList />
    <AboutUs />
    <Testimoni />
    <Contact />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
import PricingList from '~/components/PricingList';
import AboutUs from '~/components/AboutUs.vue';
import Testimoni from '~/components/Testimoni.vue';
import Contact from '~/components/Contact.vue';
</script>