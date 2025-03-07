export type Slides = Record<string, Slide>

export type SlideTypes = 'info' | 'radio' | 'input' | 'checkbox'

export interface SlideOption {
  title: string
  key: string
  src?: string
}

export interface SlideInput {
  key: string
  placeholder: string
  label: string
  required: boolean
}

export interface SlideElement {
  type: string
  textContent?: string
  class?: string
  styles: Record<string, string>
  children?: SlideElement[]
}

export interface Slide {
  id: string
  slideType: SlideTypes
  key: string
  title?: string
  description?: string
  prompt?: string
  src?: string
  layout?: string
  optionsSource?: 'categories'
  options?: SlideOption[]
  class?: string
  inputs?: SlideInput[]
  elements?: SlideElement[]
}
