import { createStore } from 'redux'

const initialState = {
  theme: 0,
  themeChoices: [
    'primary',
    'secondary',
    'tertiary',
  ],
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
    default:
      return state
  }
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
