import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const api = express.Router()

api
  .use(cookieParser())
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({ extended: true })) // // for parsing application/x-www-form-urlencoded

  .get('/', (req, res) => {
    res.send({ url: '/' })
  })
  .post('/asset', (req, res) => {
    res.send(req.body)
  })
  .post('/playlist', (req, res) => {
    res.send(req.body)
  })

  .use((req, res) => res.sendStatus(404))

export default api
