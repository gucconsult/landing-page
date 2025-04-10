<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const APP_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.APP_URL
useHead({
  htmlAttrs: {
    lang: 'id'
  },
  bodyAttrs: {
    class: 'font-sans antialiased scroll-smooth'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})

useSeoMeta({
  title: 'GlowUp Career Consultant',
  description: 'GlowUp Career Consultant adalah start-up pengembangan karir yang menawarkan layanan lengkap, termasuk pembuatan/review CV, optimasi portofolio, LinkedIn, pelatihan interview, serta career coaching',
  ogTitle: 'GlowUp Career Consultant',
  ogDescription: 'GlowUp Career Consultant adalah start-up pengembangan karir yang menawarkan layanan lengkap, termasuk pembuatan/review CV, optimasi portofolio, LinkedIn, pelatihan interview, serta career coaching',
  ogImage: `${APP_URL}/og-image.webp`,
  ogUrl: APP_URL,
  twitterTitle: 'GlowUp Career Consultant',
  twitterDescription: 'GlowUp Career Consultant adalah start-up pengembangan karir yang menawarkan layanan lengkap, termasuk pembuatan/review CV, optimasi portofolio, LinkedIn, pelatihan interview, serta career coaching',
  twitterImage: `${APP_URL}/og-image.webp`,
  twitterCard: 'summary'
})
</script>
