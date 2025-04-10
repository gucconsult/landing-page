<template>
  <div class="flex gap-3 items-center">
    <div class="w-12 h-12 rounded-full bg-primary p-3">
      <img :src="icon" :alt="text" class="size-6">
    </div>
    <span class="text-lg font-semibold text-gray-900">{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  icon: String,
  text: String
})
</script>