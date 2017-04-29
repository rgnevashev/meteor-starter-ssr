import { combineReducers } from 'redux' // 10kb
import { createReducer } from 'redux-act' // 7kb

const auth = (state = {}, action) => state
const home = (state = {}, action) => state
const about = (state = {}, action) => state
const topics = (state = {}, action) => state

const rootReducer = combineReducers({
  auth,
  home,
  about,
  topics
})

export default rootReducer
