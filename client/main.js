// eslint-disable no-underscore-dangle
//import SimpleSchema from 'simpl-schema' // !250kb
import React from 'react'
import { render } from 'react-dom' // !200kb
import { BrowserRouter as Router } from 'react-router-dom' // 48kb
import { Provider } from 'react-redux' // 18kb

import '/imports/styles'

import configureStore from '/imports/store'

import App from '/imports/components/App'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

Meteor.startup(() => {
  render((
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  ), document.getElementById('app-root'))
})

// App: 520kb

// All: 1006kb
