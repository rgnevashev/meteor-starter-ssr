import { onPageLoad } from 'meteor/server-render'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Helmet from 'react-helmet'
import { StaticRouter as Router, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from '/imports/store'

import routes from '/imports/routes'

import App from '/imports/components/App'

import { perfStart, perfStop } from '/imports/utils/perfMeasure'

onPageLoad((sink) => {
  // Start performance cheking
  perfStart()

  const initialState = {}
  const context = {}
  const store = configureStore(initialState)

  const markup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Router location={sink.request.url} context={context}>
        <App />
      </Router>
    </Provider>
  )

  const helmetHead = Helmet.renderStatic()
  sink.appendToHead(
    ['title', 'meta', 'link', 'script']
      .reduce((acc, key) => `${acc}${helmetHead[key].toString()}`, '')
  )

  sink.appendToBody(`<script>window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}</script>`)

  if (context.url) {
    sink.response.redirect(302, context.url)
  } else {
    sink.renderIntoElementById('app-root', markup)
  }

  // End performance cheking
  perfStop(`${sink.request.url.pathname}`)
})

/*
  const hashedToken = Accounts._hashLoginToken(req.headers.authtoken);
  const user = Meteor.users.findOne({ 'services.resume.loginTokens.hashedToken': hashedToken });
*/
