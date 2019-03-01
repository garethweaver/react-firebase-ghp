import { createStore } from 'redux'

const initialState = {
  theme: 0,
  themeChoices: [
    'primary',
    'secondary',
    'tertiary',
  ],
  user: null,
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CYCLE_THEME':
      let theme = state.theme + 1 === state.themeChoices.length
        ? 0
        : state.theme + 1
      return {
        ...state,
        theme: theme,
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
