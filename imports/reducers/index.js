import { combineReducers } from 'redux' // 10kb
import { createReducer } from 'redux-act' // 7kb

const auth = (state = {}, action) => state

const rootReducer = combineReducers({
  auth
})

export default rootReducer
