import { ThunkDispatch } from 'redux-thunk'
import { BannersState } from './reducers/banners/types'
import { AnyAction } from 'redux'

export interface HomeState {
  banners: BannersState
}

export interface ReduxAction {
  key?: string
  type: string
  payload?: {
    error?: Error
    [key: string]: any
  }
  meta?: any
}

export interface AppState {
  [key: string]: any
}

export interface GlobalState {
  appState?: AppState
}

export interface InteractiveState<T> {
  state: T
  globals: GlobalState
}

export interface Actions {
  [key: string]: (...args: any[]) => any
}

export interface GlobalActions {
  appActions?: Actions
}

export type UseInteractive<T, U> = (
  dispatch: ThunkDispatch<InteractiveState<T>, {}, AnyAction>,
  interactiveState: InteractiveState<T>,
  globalActions: GlobalActions
) => U

export type HomeInteractive<U> = UseInteractive<HomeState, U>
