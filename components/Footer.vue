<template>
  <footer class="relative bottom-0 bg-gu-navy text-gu-white py-3 items-center gap-1 text-center">
    <span class="px-2">©</span>
    <span class="text-sm">{{ year }} {{ name }}</span>
  </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
const name = 'GlowUp Career Consultant'
</script>

<style>

</style>