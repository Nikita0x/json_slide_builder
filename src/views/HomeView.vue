<template>
  <!-- <div class="flex min-h-screen"> -->
  <!-- sidebar -->
  <div class="flex w-full h-screen bg-gray-950">
    <!-- sidebar -->
    <aside
      class="text-white w-50 flex flex-col gap-5 p-3 hover:w-[20rem] transition-all duration-300 overflow-y-hidden hover:overflow-y-auto overflow-x-hidden h-screen shrink-0 border-r-gray-700 border-r"
    >
      <input
        class="w-full bg-transparent placeholder:text-slate-400 text-sm border border-slate-200/25 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-white"
        placeholder="Search"
      />
    </aside>

    <!-- middle column -->
    <div class="flex-1 overflow-auto relative">
      <SlideEditor
        draggable="true"
        class="border-b-1 hover:bg-gray-900 cursor-pointer"
        v-for="(slide, index) in slides"
        :key="slide.id"
        :slide="slide"
        @dragstart="onDragStart($event, slide.id)"
        @dragover.prevent
        @dragenter.prevent
        @drop="onDrop($event, slide.id)"
      />

      <p
        @click="
          () => {
            console.log('slides object: ', slides)
            console.log('slidesOrder  arr: ', slideOrder)
          }
        "
      >
        log slides
      </p>

      <div class="fixed bottom-5 left-[20%]">
        <ControlsComponent />
      </div>
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
import ControlsComponent from '@/components/ControlsComponent.vue'
import { ref } from 'vue'
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'

const slidesStore = useSlidesStore()
const { addSlide } = slidesStore
const { slides, slideOrder } = storeToRefs(slidesStore)

function onDragStart(ev: DragEvent, slideId: string) {
  if (!ev.dataTransfer) return
  // Pass the slide ID instead of index

  ev.dataTransfer.effectAllowed = 'move'
  ev.dataTransfer.setData('text/plain', slideId)
}

function onDrop(event: DragEvent, targetSlideId: string) {
  event.preventDefault() // Always prevent default

  // Retrieve the dragged slide ID
  const draggedSlideId = event.dataTransfer?.getData('text/plain')

  if (!draggedSlideId || draggedSlideId === targetSlideId) return

  slidesStore.reorderSlides(draggedSlideId, targetSlideId)

  console.log('new order: ', slideOrder.value)
}
</script>
