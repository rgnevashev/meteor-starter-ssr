import { WebApp } from 'meteor/webapp'

import express from 'express'

import api from '/imports/routes/api'

const app = express()

app
  .use('/api', api)

WebApp.connectHandlers.use(Meteor.bindEnvironment(app))
