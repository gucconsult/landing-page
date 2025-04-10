<template>
  <section :class="`${bgColor} w-full`">
    <div class="px-4 py-12 mx-auto max-w-7xl">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  bgColor: {
    type: String,
    default: 'bg-white'
  }
})
</script>

<style></style>