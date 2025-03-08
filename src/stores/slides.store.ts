import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Slides, Slide } from '@/interfaces/slides'

export const useSlidesStore = defineStore('slides', () => {
  const slides = ref<Slides>({})

  function addSlide() {
    const newSlide: Slide = {
      id: crypto.randomUUID(),
      key: `slide-${crypto.randomUUID()}}`,
      slideType: 'info',
      elements: [
        // {
        //   type: 'p',
        //   textContent: '<span>Helllo</span>',
        //   style: {
        //     'padding-left': '1.25rem',
        //     color: 'red',
        //     'text-align': 'left',
        //     'font-size': '2.5rem',
        //     'font-weight': '600',
        //   },
        // },

        {
          type: 'img',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyC1R_oj_EmzQfCTk9_wOl7ESlrUJT6q3SA&s',
          style: {
            'margin-bottom': '6rem',
            'margin-left': 'auto',
            'margin-right': 'auto',
            width: '200px',
            display: 'block',
            filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))',
          },
          theme: {
            light: {
              display: 'none',
            },
            dark: {},
          },
        },
        {
          type: 'img',
          src: 'https://image.petmd.com/files/styles/978x550/public/2024-06/hip-dysplasia-in-dogs.jpg',
          style: {
            'margin-bottom': '6rem',
            'margin-left': 'auto',
            'margin-right': 'auto',

            width: '200px',
            display: 'block',
            filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))',
          },
          theme: {
            light: {},
            dark: {
              display: 'none',
            },
          },
        },
        {
          type: 'div',
          style: {
            position: 'relative',
            'padding-left': '1.25rem',
            'margin-bottom': '1.75rem',
            display: 'flex',
            gap: '0.75rem',
            'justify-center': 'center',
            'align-items': 'center',
          },
          theme: { light: {}, dark: {} },
          children: [
            {
              type: 'img',
              src: 'https://static.vecteezy.com/system/resources/thumbnails/023/654/784/small_2x/golden-logo-template-free-png.png',
              style: {
                display: 'block',
                width: '1.5rem',
                height: '1.5rem',
              },
              theme: {
                light: {},
                dark: { display: 'none' },
              },
            },
            {
              type: 'img',
              src: 'https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1705580343/ideas-and-advice-prod/en-us/adidas/adidas.png?_i=AA',
              style: {
                display: 'block',
                width: '1.5rem',
                height: '1.5rem',
              },
              theme: {
                light: {
                  display: 'none',
                },
                dark: {},
              },
            },
            {
              textContent: 'slide builder',
              type: 'p',
              style: {
                'font-size': '1.25rem',
                'font-weight': '600',
              },
              theme: {
                light: {
                  color: '#161229',
                },
                dark: {
                  color: 'white',
                },
              },
            },
            {
              type: 'div',
              style: {
                position: 'absolute',
                top: '-1.438rem',
                left: '-3.688rem',
                'z-index': '-1',
                width: '18.875rem',
                height: '18.875rem',
                background: '#5C41D3',
                'border-radius': '999px',
                filter: 'blur(35px)',
                opacity: '0.24',
                'will-change': 'opacity',
              },
              theme: { light: {}, dark: {} },
            },
          ],
        },
        {
          type: 'p',
          textContent: '<span> Some text that will change style based on theme</span>',
          style: {
            'padding-left': '1.25rem',
            'text-align': 'left',
            'font-size': '2.5rem',
            'font-weight': '600',
          },
          theme: {
            light: {
              color: 'white',
            },
            dark: {
              color: 'red',
            },
          },
        },
      ],
    }

    slides.value[newSlide.id] = newSlide
    console.log('new slide created: ', newSlide)
  }

  // 🟢 Load data from localStorage when the store initializes
  const savedSlides = localStorage.getItem('slides')
  if (savedSlides) {
    slides.value = JSON.parse(savedSlides)
  }

  function deleteSlide(s: Slide) {
    // slides.value = slides.value.filter((slide) => slide.id !== s.id)
    delete slides.value[s.id]
  }

  function $reset() {
    slides.value = {}
  }

  // Save slides to localStorage whenever they change
  watch(
    slides,
    (newSlides: any) => {
      localStorage.setItem('slides', JSON.stringify(newSlides))
    },
    { deep: true },
  )

  return { slides, addSlide, deleteSlide, $reset }
})
