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
  description: 'Start-up pengembangan karir yang menawarkan layanan pembuatan CV, review CV, optimasi portofolio, optimasi LinkedIn, pelatihan interview, dan bimbingan karier',
  ogTitle: 'GlowUp Career Consultant',
  ogDescription: 'Start-up pengembangan karir yang menawarkan layanan pembuatan CV, review CV, optimasi portofolio, optimasi LinkedIn, pelatihan interview, dan bimbingan karier',
  ogImage: `${APP_URL}/assets/images/about-us.webp`,
  ogUrl: APP_URL,
  twitterTitle: 'GlowUp Career Consultant',
  twitterDescription: 'Start-up pengembangan karir yang menawarkan layanan pembuatan CV, review CV, optimasi portofolio, optimasi LinkedIn, pelatihan interview, dan bimbingan karier',
  twitterImage: `${APP_URL}/assets/images/about-us.webp`,
  twitterCard: 'summary_large_image'
})
</script>
