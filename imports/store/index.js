import axios from 'axios' // !180kb
import { createStore, applyMiddleware } from 'redux' // 10kb
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger' // 12kb
import axiosMiddleware from 'redux-axios-middleware' // 8kb

import rootReducer from '../reducers'

const client = axios.create({
  baseURL: 'http://localhost:3000/api',
  responseType: 'json'
})

const configureStore = (initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    axiosMiddleware(client),
    createLogger()
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  //assignAll(actions, store)

  return store
}

export default configureStore
