// import reducers from './reducers'
// import useInteractive from './useInteractive'

import lodash from 'lodash'

const config = {
  reducers: () => import('./reducers'),
  interactive: () => import('./useInteractive'),
}

export default config
