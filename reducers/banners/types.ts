export interface Slide {
  label?: string
  url?: string
  type?: 'VIDEO' | 'IMAGE'
}

export interface BannersState {
  slides: Slide[]
  isLoading: boolean
}
