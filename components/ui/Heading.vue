<template>
  <div class="space-y-2 text-center sm:text-start">
    <h2 class="text-2xl font-bold text-white">{{ title }}</h2>
    <span class="text-sm font-normal text-white">{{ subtitle }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  subtitle: String
})
</script>