<template>
  <div class="flex flex-col gap-2 items-center lg:items-start">
    <div class="h-14 w-14 rounded-full bg-background flex justify-center items-center">
      <component :is="icon" class="w-6 h-6 text-primary" />
    </div>
    <h3 class="text-xl font-bold text-dark">{{ title }}</h3>
    <span class="text-sm font-medium text-dark text-center lg:text-start">{{ description }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  description: String,
  icon: Object
});
</script>