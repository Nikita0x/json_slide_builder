<template>
  <p>radio slide</p>
  <!-- <OnboardingDefaultLayout :disabled="selectedRadio === null" :slide="slide">
    <div>
      <p class="pt-[5.438rem] text-center text-2xl font-semibold text-purple-dark dark:text-white">
        {{ slide.title }}
      </p>
      <RecursiveElement v-for="(element, index) in slide.elements" :key="index" :element="element" />
    </div>
    <div
      class="mt-[5.4rem] flex flex-col gap-5 overflow-auto rounded-[20px] bg-white px-9 py-10 shadow-md dark:bg-purple-dark"
    >
      <div class="gap-5 overflow-auto" :style="slide.layout || { display: 'flex', flexDirection: 'column' }">
        <button
          v-for="item in slide.options"
          :key="item.key"
          :value="item.key"
          @click="handleChangeTest(item.key)"
          class="flex min-w-max items-center justify-center rounded-full border px-4 py-3 transition-colors"
          :class="{
            'bg-primary text-purple-dark': item.key === selectedRadio,
            'border border-solid border-gray text-purple-dark dark:text-white': item.key !== selectedRadio,
          }"
        >
          {{ item.title }}
        </button>
      </div>
    </div>
  </OnboardingDefaultLayout> -->
</template>

<script setup lang="ts">
// import { IonRadioGroup, IonRadio } from '@ionic/vue'
// import { IonRadioGroupCustomEvent, RadioGroupChangeEventDetail } from '@ionic/core'
// import OnboardingDefaultLayout from '@/components/layout/OnboardingDefaultLayout.vue'
// import { computed, ref } from 'vue'
// import { useUserStore } from '@/stores/user.store'
// import { storeToRefs } from 'pinia'
// import { Slide } from '@/types/interfaces/onboarding.interfaces'
// import RecursiveElement from './RecursiveElement.vue'

// const userStore = useUserStore()
// const { onboardingAnswers, preferencesPrompts } = storeToRefs(userStore)

// const selectedRadio = ref<string | null>(null)

// function handleChangeTest(selectedOptionKey: string) {
//   onboardingAnswers.value[props.slide.key as keyof typeof onboardingAnswers.value] = selectedOptionKey

//   if (props.slide.prompt && selectedAnswer.value?.title) {
//     preferencesPrompts.value[props.slide.key as keyof typeof preferencesPrompts.value] =
//       props.slide.prompt.replace('{value}', selectedAnswer.value.title)
//   }
//   selectedRadio.value = selectedOptionKey
// }

// const props = defineProps<{
//   slide: Slide
// }>()

// const selectedAnswer = computed(() => {
//   return props.slide?.options?.find(
//     (item) => item.key === onboardingAnswers.value[props.slide.key as keyof typeof onboardingAnswers.value],
//   )
// })
</script>

<style scoped>
ion-radio::part(container) {
  display: none;
}

ion-radio::part(label) {
  all: unset;
  text-align: center;
  margin: 0 auto;
}

.radio-checked {
  background: #3758f9;
  color: white;
}
</style>
