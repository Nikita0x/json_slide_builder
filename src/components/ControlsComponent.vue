<template>
  <BaseButton class="bg-green-500" title="Add New Slide" @click="addSlide" />
  <BaseButton class="bg-yellow-500" title="Preview" @click="router.push('preview')" />
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import router from '@/router'
import { useSlidesStore } from '@/stores/slides.store'
import { storeToRefs } from 'pinia'

const slidesStore = useSlidesStore()
const { addSlide } = slidesStore
const { slides } = storeToRefs(slidesStore)
</script>
