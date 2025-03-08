<template>
  <!-- <OnboardingDefaultLayout :slide="slide"> -->
  <div class="relative">
    <pre v-if="state.showJson" class="bg-black text-white/80">{{ slide }}</pre>
    <img v-if="slide.src" :src="slide.src" alt="image" class="h-40" />
    <RecursiveElement v-for="(element, index) in slide.elements" :key="index" :element="element" />

    <div class="flex absolute top-0 right-0">
      <BaseButton
        @click="state.showJson = !state.showJson"
        class="bg-orange-600"
        :title="state.showJson ? 'hide' : state.btnTitle"
      />
      <BaseButton @click="toggleTheme" class="bg-orange-600" :title="themeButtonTitle" />
    </div>
  </div>
  <!-- </OnboardingDefaultLayout> -->
</template>

<script setup lang="ts">
import type { Slide } from '@/interfaces/slides'
// import OnboardingDefaultLayout from '@/components/layout/OnboardingDefaultLayout.vue'
import RecursiveElement from '@/components/RecursiveElement.vue'
import { ref, computed } from 'vue'
import BaseButton from './BaseButton.vue'
import { useCommonStore } from '@/stores/common.store'
import { storeToRefs } from 'pinia'

const commonStore = useCommonStore()
const { theme, currentTheme } = storeToRefs(commonStore)

const state = ref({
  showJson: false,
  btnTitle: 'show json',
})

const themeButtonTitle = computed(() => {
  if (currentTheme.value === 'dark') {
    return 'Toggle Light Theme'
  } else {
    return 'Toggle Dark Theme'
  }
})

function toggleTheme() {
  if (theme.value === 'dark') {
    theme.value = 'light'
  } else if (theme.value === 'light') {
    theme.value = 'dark'
  }
}

defineProps<{
  slide: Slide
}>()
</script>
