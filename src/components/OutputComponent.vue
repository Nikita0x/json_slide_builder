<template>
  <div class="relative">
    <button
      v-if="slides.length"
      class="fixed right-10 top-5 bg-slate-900 text-white p-5 rounded-xl cursor-pointer"
      @click="copyToClipboard"
    >
      {{ buttonTitle }}
    </button>
    <pre class="bg-black text-white/80">
          {{ slides }}      
    </pre>
  </div>
</template>

<script setup lang="ts">
import { useSlidesStore } from '@/stores/slides.store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const slidesStore = useSlidesStore()
const { addSlide } = slidesStore
const { slides } = storeToRefs(slidesStore)
const buttonTitle = ref('copy')

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(JSON.stringify(slides.value, null, 2))
    buttonTitle.value = 'Copied!'
    console.log(slides.value)

    setTimeout(() => {
      buttonTitle.value = 'copy'
    }, 1500)
  } catch (error) {
    console.error('Failed to copy:', error)
  }
}
</script>
