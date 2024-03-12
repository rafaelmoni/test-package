import { Slide } from '../reducers/banners/types'
import { HomeInteractive } from '../types'

type Interactives = {
  slider: {
    attributes: {
      slides: Slide[]
      isLoading: boolean
    }
  }
}

export const homeInteractive: HomeInteractive<Interactives> = (
  dispatch,
  interactiveState,
  globalActions
) => ({
  slider: {
    attributes: {
      slides: interactiveState.state.banners.slides,
      isLoading: interactiveState.state.banners.isLoading,
      onClick: () => alert('Clickado'),
    },
  },
})
