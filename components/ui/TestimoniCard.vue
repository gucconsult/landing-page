<template>
  <div class="max-w-xs px-4 py-3 border border-gray-200 rounded-sm shadow-sm">
    <div class="flex gap-3">
      <div class="h-10 w-10 rounded-full overflow-hidden">
        <NuxtImg src="/assets/images/default.webp" class="object-center object-cover w-11 h-11" :alt="name" width="40"
          height="40" loading="lazy" :placeholder="[40, 40]" />
      </div>
      <div class="flex flex-col">
        <span class="font-bold text-dark">{{ name }}</span>
        <span class="text-sm text-gray-600">{{ job }}</span>
      </div>
    </div>
    <p class="mt-3 text-sm leading-relaxed text-gray-700">
      {{ review }}
    </p>
    <div class="w-full flex justify-end mt-4">
      <span class="text-xs text-gray-600">{{ date }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: String,
  job: String,
  review: String,
  date: String
})
</script>

<style></style>