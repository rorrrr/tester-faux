import { uniqBy, sortBy } from 'lodash'

var reducer = (
  state = {
    aces: 'Tester shite',
  },
  action,
) => {
  switch (action.type) {
    case 'setAces':
      return { ...state, aces: action.aces }
    default:
      return state
  }
}

export default reducer
