import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { homeInteractive } from './interactive-map/home'
import { GlobalActions, HomeState, InteractiveState } from './types'

const useInteractive = (
  dispatch: ThunkDispatch<InteractiveState<HomeState>, {}, AnyAction>,
  interactiveState: InteractiveState<HomeState>,
  globalActions: GlobalActions
) => ({
  ...homeInteractive(dispatch, interactiveState, globalActions),
})

export default useInteractive
