<template>
  <div class="relative">
    <div>
      <select v-model="slides[0].slideType">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>

    <textarea v-model="jsonString" class="w-full p-2 bg-gray-900 text-white rounded" rows="6"></textarea>
    <button
      @click="deleteSlide(model)"
      class="absolute top-0 right-0 cursor-pointer bg-red-900/30 p-2 rounded-full hover:bg-red-900 transition-all"
    >
      X
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineModel, computed } from 'vue'
import type { Slide } from '@/interfaces/slides'
import { useSlidesStore } from '@/stores/slides.store'
import { storeToRefs } from 'pinia'

const model = defineModel<Slide>({ required: true })

const slidesStore = useSlidesStore()
const { deleteSlide, slides } = slidesStore

const jsonString = computed({
  get: () => JSON.stringify(model.value, null, 2),
  set: (value) => {
    try {
      const parsed = JSON.parse(value)
      model.value = parsed
      console.log('setting')
    } catch (e) {
      console.error('Invalid JSON:', e)
      console.info('CRINGE RRRO')
    }
  },
})
</script>
