<template>
  <div>
    <swiper
      class="swiper-default h-full w-full"
      :slides-per-view="1"
      :space-between="60"
      :prevent-interaction-on-transition="true"
      :allow-touch-move="true"
      @swiper="handleSwiper"
      :autoplay="{
        delay: 3000, // Time between slides (in milliseconds)
        disableOnInteraction: false, // Keep autoplay after user interaction
      }"
    >
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <component :is="slideByType[slide.slideType as keyof typeof slideByType]" :slide="slide" />
      </swiper-slide>
    </swiper>

    <div class="fixed bottom-0 pl-30">
      <BaseButton class="bg-yellow-500" title="Back to Editor" @click="router.push('/')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import router from '@/router'
import { storeToRefs } from 'pinia'
import 'swiper/css'
import type { Swiper as ISwiper } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import RadioSlide from '@/components/RadioSlide.vue'
import InfoSlide from '@/components/InfoSlide.vue'
import { useSlidesStore } from '@/stores/slides.store'
import 'swiper/css'

const slidesStore = useSlidesStore()
const { slides } = storeToRefs(slidesStore)

// interface Props {
//   slides: any
// }
// defineProps<Props>()
// const userStore = useUserStore()
// const commonStore = useCommonStore()
// const { isDev, theme } = storeToRefs(commonStore)
// const { isOnboardingDone, onboardingAnswers } = storeToRefs(userStore)

const slideByType = {
  //   radio: RadioSlide,
  info: InfoSlide,
  //   input: InputSlide,
  //   checkbox: CheckboxSlide,
}

// state
const swiperRef = ref<ISwiper | null>(null)

const handleSwiper = (instance: ISwiper) => {
  swiperRef.value = instance
}
</script>
