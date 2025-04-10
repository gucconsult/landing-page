<template>
  <div :class="`space-y-2 text-center ${positionClass[position]}`">
    <h2 :class="`text-2xl font-bold ${color[variant]}`">{{ title }}</h2>
    <span :class="`text-sm font-normal ${color[variant]}`">{{ subtitle }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  subtitle: String,
  variant: {
    type: String,
    default: 'default'
  },
  position: {
    type: String,
    default: 'start'
  }
})

const color = {
  default: 'text-gray-900',
  white: 'text-white'
}

const positionClass = {
  start: 'sm:text-start',
  center: 'sm:text-center',
}

</script>