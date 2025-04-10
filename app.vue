<template>
  <NuxtLayout>
    <NuxtPage class="font-sans scroll-smooth antialiased" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'id'
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
  ogImage: '/og-image.webp',
  ogUrl: 'https://glowupcareerconsultant.vercel.app',
  twitterTitle: 'GlowUp Career Consultant',
  twitterDescription: 'GlowUp Career Consultant adalah start-up pengembangan karir yang menawarkan layanan lengkap, termasuk pembuatan/review CV, optimasi portofolio, LinkedIn, pelatihan interview, serta career coaching',
  twitterImage: '/og-image.webp',
  twitterCard: 'summary'
})
</script>
