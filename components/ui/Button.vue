<script setup lang="ts">

const sizeClassMap = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-4 py-2.5',
  text: 'text-sm',
} as const

const variantClassMap = {
  primary: 'bg-primary text-white hover:bg-orange-500 focus:ring-primary',
  text: 'text-primary hover:text-primary-hover',
} as const

type Size = keyof typeof sizeClassMap
type Variant = keyof typeof variantClassMap
type TagType = 'button' | 'a' | 'NuxtLink'
type IconPosition = 'left' | 'right'

const props = defineProps<{
  as?: TagType
  to?: string | object
  href?: string
  size?: Size
  variant?: Variant
  icon?: any
  iconPosition?: IconPosition
  disabled?: boolean
  onClick?: () => void
  target?: string
}>()

const tag = computed(() => {
  return props.as === 'NuxtLink' ? resolveComponent('NuxtLink') : props.as || 'button'
})

const baseClass =
  'inline-flex items-center justify-center rounded-sm font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 cursor-pointer font-semibold'

const classes = computed(() => [
  baseClass,
  sizeClassMap[props.size || 'md'],
  variantClassMap[props.variant || 'primary'],
])
</script>

<template>
  <component :is="tag" :to="as === 'NuxtLink' ? to : undefined" :href="as === 'a' ? href : undefined"
    :disabled="as === 'button' ? disabled : undefined" :class="classes" @click="onClick" :target="target">
    <template v-if="icon && iconPosition === 'left'">
      <component :is="icon" class="w-5 h-5 mr-2" />
    </template>
    <slot />
    <template v-if="icon && iconPosition === 'right'">
      <component :is="icon" class="w-5 h-5 ml-2" />
    </template>
  </component>
</template>
