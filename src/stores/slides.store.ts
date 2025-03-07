import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Slides, Slide } from '@/interfaces/slides'

export const useSlidesStore = defineStore('slides', () => {
  const slides = ref<Slides>({})

  function addSlide() {
    const newSlide: Slide = {
      id: crypto.randomUUID(),
      key: `slide-${crypto.randomUUID()}}`,
      slideType: 'info',
      src: 'https://shorturl.at/NlEyA',
    }

    slides.value[newSlide.id] = newSlide
    console.log('new slide created: ', newSlide)
  }

  function deleteSlide(s: Slide) {
    // slides.value = slides.value.filter((slide) => slide.id !== s.id)
    delete slides.value[s.id]
  }

  function $reset() {
    slides.value = {}
  }

  return { slides, addSlide, deleteSlide, $reset }
})
