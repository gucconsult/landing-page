<template>
  <footer class="items-center gap-1 py-4 text-center bg-gu-navy text-gu-white">
    <span class="px-2">&copy;</span>
    <span class="text-sm">{{ year }} GlowUp Career Consultant</span>
  </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<style></style>