<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const APP_URL = process.env.APP_URL || 'http://localhost:3000'
useHead({
  htmlAttrs: {
    lang: 'id'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})

useSeoMeta({
  title: 'GlowUp Career Consultant',
  description: 'GlowUp Career Consultant adalah start-up pengembangan karir yang menawarkan layanan lengkap, termasuk pembuatan/review CV, optimasi portofolio, LinkedIn, pelatihan interview, serta career coaching',
  ogTitle: 'GlowUp Career Consultant',
  ogDescription: 'GlowUp Career Consultant adalah start-up pengembangan karir yang menawarkan layanan lengkap, termasuk pembuatan/review CV, optimasi portofolio, LinkedIn, pelatihan interview, serta career coaching',
  ogImage: `${APP_URL}/assets/images/about-us.webp`,
  ogUrl: APP_URL,
  twitterTitle: 'GlowUp Career Consultant',
  twitterDescription: 'GlowUp Career Consultant adalah start-up pengembangan karir yang menawarkan layanan lengkap, termasuk pembuatan/review CV, optimasi portofolio, LinkedIn, pelatihan interview, serta career coaching',
  twitterImage: `${APP_URL}/assets/images/about-us.webp`,
  twitterCard: 'summary_large_image'
})
</script>
