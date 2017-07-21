import { WebApp, WebAppInternals } from 'meteor/webapp'
import { onPageLoad } from 'meteor/server-render'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Helmet from 'react-helmet'
import { StaticRouter as Router, matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from '/imports/store'

import routes from '/imports/routes'
import api from '/imports/routes/api'

import App from '/imports/components/App'

import { perfStart, perfStop } from '/imports/utils/perfMeasure'

// URL pattern covered by Express
// @NOTE URLs that:
// * doesn't start with `/api/`
// * doesn't start with `/__cordova/`
// * contains no `.`
//const EXPRESS_COVERED_URL = /^\/(?!api\/)(?!__cordova\/)[^.]*$/

const app = express()

app
  .use('/api', api)
  //.route(EXPRESS_COVERED_URL)
  /*.get((req, res, next) => {

    // Start performance cheking
    perfStart()

    // inside a request
    const promises = []

    // use `some` to imitate `<Switch>` behavior of selecting only the first to match
    routes.some((route) => {
      // use `matchPath` here
      const match = matchPath(req.url, route)
      if (match && route.fetchData) {
        promises.push(route.fetchData(match))
      }
      return match
    })

    Promise.all(promises).then((data) => {

      const initialState = data.reduce((prev, curr) => ({ ...prev, ...curr }), {})

      const context = {}
      const store = configureStore(initialState)
      const html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <Router location={req.url} context={context}>
            <App />
          </Router>
        </Provider>
      )
      const helmetHead = Helmet.renderStatic()

      req.dynamicBody = `
        <div id="app-root">${html}</div>
        <script>window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}</script>
      `
      req.dynamicHead = ['title', 'meta', 'link', 'script']
        .reduce((acc, key) => `${acc}${helmetHead[key].toString()}`, '')

      if (context.url) {
        res.redirect(302, context.url)
      } else {
        res
          .set('Content-Type', 'text/html')
          .status(200)
          .send(WebAppInternals.getBoilerplate(req, WebApp.defaultArch))
      }

      // End performance cheking
      perfStop(`${req.originalUrl}`)
    })
  })*/

WebApp.connectHandlers.use(Meteor.bindEnvironment(app))

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
