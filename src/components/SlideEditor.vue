<template>
  <div @click="console.log(slidesArray)" class="border relative">
    <p>{</p>
    <div v-for="item in slidesArray">
      <div class="pl-5 flex gap-3">
        <p>{{ item[0] }}:</p>

        <template v-if="item[0] === 'src'">
          <input v-model="slides[slide.id].src" />
        </template>

        <template v-if="item[0] === 'slideType'">
          <select v-model="slides[slide.id].slideType">
            <option>info</option>
            <option>input</option>
            <option>radio</option>
            <option>checkbox</option>
          </select>
        </template>
      </div>
    </div>

    <p>}</p>
    <button
      class="bg-red-500 cursor-pointer p-1 rounded-md absolute top-0 right-0"
      @click="deleteSlide(slide)"
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

interface Props {
  slide: Slide
}

const props = defineProps<Props>()

const slidesArray = Object.entries(props.slide)

const slidesStore = useSlidesStore()
const { deleteSlide, slides } = slidesStore
</script>
