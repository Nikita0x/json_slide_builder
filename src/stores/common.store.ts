import { ref, computed, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'

export type Theme = 'light' | 'dark' | 'system'

export const useCommonStore = defineStore(
  'common',
  () => {
    // const ionNavRef = ref<{ $el: HTMLIonNavElement } | null>(null)

    const isDev = computed(() => {
      return import.meta.env.VITE_MODE == 'dev'
    })
    const theme = ref<Theme>('system')

    onMounted(() => {
      updateHTMLClass(theme.value)
    })
    watch(theme, (newTheme) => {
      updateHTMLClass(newTheme)
    })

    const updateHTMLClass = (theme: Theme) => {
      const htmlClassList = document.documentElement.classList
      htmlClassList.remove('light', 'dark')

      if (theme === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        htmlClassList.add(systemPrefersDark ? 'dark' : 'light')
      } else {
        htmlClassList.add(theme)
      }
    }

    return {
      //   ionNavRef,
      isDev,
      theme,
    }
  },
  //   {
  //     persist: {
  //       enabled: true,
  //       include: ['theme'],
  //     },
  //   },
)
