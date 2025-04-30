<template>
  <header class="bg-white/80 backdrop-blur-3xl w-full fixed top-0 left-0 z-50 border-b border-gray-100">
    <nav class="max-w-7xl mx-auto p-2">
      <div class="container mx-auto flex justify-between items-center">
        <ApplicationName />
        <div class="flex gap-6 items-center">
          <div class="hidden md:flex space-x-6">
            <a v-for="nav in navlinks" :key="nav.href" :href="nav.href" role="navigation"
              @click.prevent="handleScroll($event)" class="hover:text-yellow-400 transition duration-300 text-sm"
              aria-label="Navigate to {{ nav.text }}">
              {{ nav.text }}
            </a>
          </div>

          <div class="flex items-center space-x-4 lg:space-x-0">
            <Button as="a" href="https://api.whatsapp.com/send/?phone=6285920284085" :icon="Whatsapp"
              icon-position="left" :target="'_blank'">
              Konsultasi
            </Button>

            <button @click="toggleMenu" class="md:hidden text-dark cursor-pointer" aria-label="Toggle menu"
              aria-labelledby="toggle-menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div v-if="isMenuOpen" class="md:hidden space-y-8 p-4 text-center">
        <a v-for="nav in navlinks" :key="nav.href" :href="nav.href" role="navigation"
          @click.prevent="handleScroll($event)" class="block hover:text-yellow-400 transition duration-300 text-sm"
          aria-label="Navigate to {{ nav.text }}">
          {{ nav.text }}
        </a>

      </div>
    </nav>
  </header>
</template>

<script setup>
import { navlinks } from '~/data/data';
import ApplicationName from './ui/ApplicationName.vue';
import Button from './ui/Button.vue';
import Whatsapp from './icon/Whatsapp.vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = (e) => {
  const href = e.target.getAttribute('href');
  const targetId = href.replace('#', '').replace('/', '');
  const el = document.getElementById(targetId);

  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: y, behavior: 'smooth' });
    toggleMenu();
  } else {
    sessionStorage.setItem('scrollTarget', targetId);
    window.location.href = href;
  }
};

onMounted(() => {
  const targetId = sessionStorage.getItem('scrollTarget');
  if (targetId) {
    const el = document.getElementById(targetId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    sessionStorage.removeItem('scrollTarget');
  }
});


</script>