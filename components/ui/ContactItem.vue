<template>
  <a :href="link" aria-label="Navigate to {{ text }}" class="flex gap-3 items-center">
    <div class="w-12 h-12 rounded-full bg-background p-3">
      <component :is="icon" class="w-6 h-6 text-primary" />
    </div>
    <span class="text-lg font-semibold text-dark">{{ text }}</span>
  </a>
</template>

<script lang="ts" setup>
defineProps({
  icon: Object,
  text: String,
  link: String
})
</script>