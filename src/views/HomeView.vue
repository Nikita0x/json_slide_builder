<template>
  <div class="grid grid-cols-2 w-full h-full">
    <div class="col-span-1 space-y-4">
      <EditorComponent v-for="(slide, index) in slides" :key="slide.id" v-model="slides[index]" />
    </div>
    <div class="col-span-1 p-4">
      <img :src="slides[0]?.slideType" class="w-40" />
      <OutputComponent />
    </div>
  </div>
  <div class="fixed bottom-0">
    <BaseButton class="bg-green-500" title="Add New Slide" @click="addSlide" />
    <BaseButton class="bg-yellow-500" title="Preview" @click="router.push('preview')" />
  </div>
</template>

<script setup lang="ts">
import EditorComponent from '@/components/EditorComponent.vue'
import BaseButton from '@/components/BaseButton.vue'
import { storeToRefs } from 'pinia'
import { useSlidesStore } from '@/stores/slides.store'
import OutputComponent from '@/components/OutputComponent.vue'
import router from '@/router'

const slidesStore = useSlidesStore()
const { addSlide } = slidesStore
const { slides } = storeToRefs(slidesStore)
</script>
