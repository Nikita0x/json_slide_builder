<template>
  <component :is="element.type" v-bind="getProps(element)" :style="resultStyles">
    <template v-if="element.children">
      <RecursiveElement v-for="(child, index) in element.children" :key="index" :element="child" />
    </template>
    <template v-else>
      <p v-html="element.textContent"></p>
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCommonStore } from '@/stores/common.store'
import { storeToRefs } from 'pinia'
const commonStore = useCommonStore()
const { theme } = storeToRefs(commonStore)

const props = defineProps<{ element: any }>()

const resultStyles = computed(() => {
  const themeStyles = props.element?.theme?.[currentTheme.value] ?? {}
  return {
    ...props.element.style,
    ...themeStyles,
  }
})

const currentTheme = computed(() => {
  if (theme.value === 'system') {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return systemPrefersDark ? 'dark' : 'light'
  } else {
    return theme.value
  }
})

const getProps = (element: any) => {
  const props: Record<string, any> = { class: element.class || '' }

  if (element.src) props.src = element.src // For images
  if (element.href) props.href = element.href // For links
  if (element.inputType) props.type = element.inputType // For inputs
  if (element.placeholder) props.placeholder = element.placeholder // For inputs
  if (element.name) props.name = element.name // For inputs

  return props
}
</script>
