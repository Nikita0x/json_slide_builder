export type Slides = Slide[]

export type Slide = {
  id: string
  key: string
  slideType: SlideType
}

export type SlideType = 'info' | 'radio' | 'input' | 'checkbox'
