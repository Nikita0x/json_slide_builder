<template>
  <div>
    <div class="grid grid-cols-2 w-full h-full pb-20">
      <div v-if="!isShowOutput" class="col-span-1 space-y-4">
        <!-- <EditorComponent v-for="(slide, index) in slides" :key="slide.id" v-model="slides[index]" /> -->
        <div class="flex flex-col gap-5">
          <SlideEditor v-for="(slide, index) in slides" :key="slide.id" :slide />
        </div>
      </div>
      <div v-if="!isShowOutput">
        <OutputComponent />
      </div>
    </div>

    <div v-if="isShowOutput" class="col-span-1 p-4">
      <OutputComponent />
    </div>
    <div class="fixed bottom-0">
      <BaseButton class="bg-green-500" title="Add New Slide" @click="addSlide" />
      <BaseButton class="bg-yellow-500" title="Preview" @click="router.push('preview')" />
      <BaseButton
        class="bg-yellow-500"
        :title="isShowOutput ? 'Show editor' : 'Show output'"
        @click="isShowOutput = !isShowOutput"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditorComponent from '@/components/EditorComponent.vue'
import BaseButton from '@/components/BaseButton.vue'
import { storeToRefs } from 'pinia'
import { useSlidesStore } from '@/stores/slides.store'
import OutputComponent from '@/components/OutputComponent.vue'
import SlideEditor from '@/components/SlideEditor.vue'
import router from '@/router'
import { ref } from 'vue'

const slidesStore = useSlidesStore()
const { addSlide } = slidesStore
const { slides } = storeToRefs(slidesStore)

const isShowOutput = ref(false)
</script>
