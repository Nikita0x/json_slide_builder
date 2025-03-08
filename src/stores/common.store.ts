import { ref, computed, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'

export type Theme = 'light' | 'dark' | 'system'

export const useCommonStore = defineStore('common', () => {
  const isDev = computed(() => {
    return import.meta.env.VITE_MODE == 'dev'
  })

  const theme = ref<Theme>('dark')

  onMounted(() => {
    updateHTMLClass(theme.value)

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')

    systemPrefersDark.addEventListener('change', updateClassBySystemTheme)
  })

  watch(theme, (newTheme) => {
    updateHTMLClass(newTheme)

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')

    if (theme.value === 'system') {
      systemPrefersDark.addEventListener('change', updateClassBySystemTheme)
    } else {
      systemPrefersDark.removeEventListener('change', updateClassBySystemTheme)
    }
  })

  const updateHTMLClass = (theme: Theme) => {
    const htmlClassList = document.documentElement.classList
    htmlClassList.remove('light', 'dark')

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')

    if (theme === 'system') {
      htmlClassList.add(systemPrefersDark.matches ? 'dark' : 'light')
    } else {
      htmlClassList.add(theme)
    }

    systemPrefersDark.addEventListener('change', (e) => {
      if (theme === 'system') {
        htmlClassList.add(e.matches ? 'dark' : 'light')
      }
    })
  }

  const updateClassBySystemTheme = (e: MediaQueryListEvent) => {
    const htmlClassList = document.documentElement.classList
    htmlClassList.remove('light', 'dark')

    if (theme.value === 'system') {
      htmlClassList.add(e.matches ? 'dark' : 'light')
    }
  }

  const currentTheme = computed(() => {
    if (theme.value === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      return systemPrefersDark ? 'dark' : 'light'
    } else {
      return theme.value
    }
  })

  return {
    isDev,
    theme,
    currentTheme,
  }
})
