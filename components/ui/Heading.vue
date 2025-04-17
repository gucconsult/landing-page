<template>
  <div :class="`space-y-2 text-center ${positionClass[position]}`">
    <h2 :class="`text-2xl font-bold ${color[variant]}`">{{ title }}</h2>
    <span :class="`text-sm font-normal ${color[variant]}`">{{ subtitle }}</span>
  </div>
</template>

<script lang="ts" setup>
type Variant = 'default' | 'white'
type Position = 'start' | 'center'

const props = withDefaults(defineProps<{
  title: string
  subtitle: string
  variant?: Variant
  position?: Position
}>(), {
  variant: 'default',
  position: 'start'
})

const color: Record<Variant, string> = {
  default: 'text-dark',
  white: 'text-white'
}

const positionClass: Record<Position, string> = {
  start: 'lg:text-start',
  center: 'lg:text-center'
}
</script>
