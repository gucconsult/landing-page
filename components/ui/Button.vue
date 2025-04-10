<template>
  <button class="inline-flex items-center justify-end w-full gap-1 text-sm font-semibold cursor-pointer text-secondary">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  variant: String
})
</script>