import { BannersState } from './types'
import { SET_SLIDES } from './actions'
import { ReduxAction } from '../../types'

export const initialState: BannersState = {
  slides: [],
  isLoading: true,
}

const bannersReducer = (
  state: BannersState = initialState,
  action: ReduxAction
) => {
  switch (action.type) {
    case SET_SLIDES:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default bannersReducer
