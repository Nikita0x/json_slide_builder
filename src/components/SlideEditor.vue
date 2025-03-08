<template>
  <div @click="console.log(slidesArray)" class="border relative">
    <p>{</p>
    <div v-for="item in slidesArray">
      <div class="pl-5 flex gap-3">
        <!-- show all json -->
        <!-- {{ item }} -->

        <template v-if="item[0] === 'key'">
          <!-- <p>{{ item[0] }}: {{ item[1] }}</p> -->
          <div class="flex gap-3">
            <p>{{ item[0] }}:</p>
            <input
              v-model="slides[slide.id].key"
              placeholder="Enter unique key for a slide"
              class="bg-gray-900 rounded-2xl px-2"
            />
          </div>
        </template>

        <template v-if="item[0] === 'src'">
          <p>{{ item[0] }}:</p>
          <input
            v-model="slides[slide.id].src"
            placeholder="Enter url of an image"
            class="bg-gray-900 rounded-2xl px-2"
          />
        </template>

        <template v-if="item[0] === 'slideType'">
          <p>{{ item[0] }}:</p>
          <select v-model="slides[slide.id].slideType">
            <option>info</option>
            <option>input</option>
            <option>radio</option>
            <option>checkbox</option>
          </select>
        </template>

        <template v-if="item[0] === 'elements'">
          <p>{{ item[0] }}:</p>
          <pre v-if="!isEditingElements" class="relative">{{ elementsString }}</pre>
          <textarea
            v-else
            class="bg-gray-900 rounded-2xl px-2 w-full h-52 resize-y"
            v-model="elementsString"
          ></textarea>
          <IconEdit
            @click="toggleEditElements"
            class="w-5 h-5 fill-white cursor-pointer absolute right-5 bg-gray-900"
          />
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
import { defineModel, computed, ref } from 'vue'
import type { Slide } from '@/interfaces/slides'
import { useSlidesStore } from '@/stores/slides.store'
import { storeToRefs } from 'pinia'
import IconEdit from '@/components/icons/IconEdit.vue'

interface Props {
  slide: Slide
}

const props = defineProps<Props>()

const slidesArray = Object.entries(props.slide)

const slidesStore = useSlidesStore()
const { deleteSlide, slides } = slidesStore

const isEditingElements = ref(false)

function toggleEditElements() {
  console.log('toggle edit elems')
  isEditingElements.value = !isEditingElements.value
}

// Computed property to handle conversion
const elementsString = computed({
  get: () => JSON.stringify(props.slide.elements, null, 2), // Pretty print JSON
  set: (newValue) => {
    try {
      props.slide.elements = JSON.parse(newValue) // Convert string back to array
    } catch (error) {
      console.error('Invalid JSON format:', error)
    }
  },
})
</script>
