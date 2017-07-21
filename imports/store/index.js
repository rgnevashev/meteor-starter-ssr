import { createStore, applyMiddleware } from 'redux' // 10kb
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger' // 12kb

import rootReducer from '../reducers'

/*
const client = axios.create({
  baseURL: 'http://localhost:3000/api',
  responseType: 'json'
})*/

const configureStore = (initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  //assignAll(actions, store)

  return store
}

export default configureStore
