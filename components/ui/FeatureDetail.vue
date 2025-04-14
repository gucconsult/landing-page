<template>
  <div class="flex flex-col gap-2 items-center lg:items-start">
    <div class="h-14 w-14 rounded-full bg-primary flex justify-center items-center">
      <img :src="icon" :alt="title" class="object-center object-cover">
    </div>
    <h3 class="text-xl font-bold text-gray-900">{{ title }}</h3>
    <span class="text-sm font-medium text-gray-600">{{ description }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  description: String,
  icon: String
});
</script>