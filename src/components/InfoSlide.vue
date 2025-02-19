<template>
  <!-- <OnboardingDefaultLayout :slide="slide"> -->
  <p>swipe me</p>
  <div class="bg-emerald-900 cursor-pointer h-96">
    <pre>{{ slide }}</pre>
    <img :src="slide.src" alt="cat" class="h-40" />
    <RecursiveElement v-for="(element, index) in slide.elements" :key="index" :element="element" />
  </div>
  <!-- </OnboardingDefaultLayout> -->
</template>

<script setup lang="ts">
import type { Slide } from '@/interfaces/slides'
// import OnboardingDefaultLayout from '@/components/layout/OnboardingDefaultLayout.vue'
import RecursiveElement from '@/components/RecursiveElement.vue'

defineProps<{
  slide: Slide
}>()
</script>
