<template>
  <NuxtLink to="/" class="flex items-center gap-3 font-bold">
    <img :src="brand" alt="GlowUp Career Consultant" class="rounded-full size-10" width="40" height="40"
      loading="lazy" />
    <span class="hidden lg:block text-lg">GlowUp Career Consultant</span>
  </NuxtLink>
</template>

<script lang="ts" setup>
import brand from '~/assets/images/logo.webp'
</script>
