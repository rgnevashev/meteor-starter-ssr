import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import asset from './asset'
import playlist from './playlist'

const api = express.Router({
  caseSensitive: true, // Enable case sensitivity. Disabled by default, treating “/Foo” and “/foo” as the same.
  strict: true // Enable strict routing. Disabled by default, “/foo” and “/foo/” are treated the same by the router.
})

api
  .use(cookieParser())
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({ extended: true })) // // for parsing application/x-www-form-urlencoded

  .use(asset, playlist)

  .use((req, res) => res.sendStatus(404))

export default api
