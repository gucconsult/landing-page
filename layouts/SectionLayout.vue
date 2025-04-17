<template>
  <section :class="`${bgColor} ${withPadding ? 'py-12' : ''} w-full`" :id="id">
    <div :class="`px-4 mx-auto max-w-7xl ${className}`">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  bgColor: {
    type: String,
    default: 'bg-white'
  },
  id: String,
  withPadding: {
    type: Boolean,
    default: true
  },
  className: {
    type: String,
    default: ''
  }
})
</script>

<style></style>