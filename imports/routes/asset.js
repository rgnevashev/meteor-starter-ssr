import router from './router'

router
  .get('/asset', (req, res) => {
    res.send({
      url: req.originalUrl
    })
  })
  .post('/asset', (req, res) => {
    res.send({
      body: req.body,
      url: req.originalUrl
    })
  })
  .post('/asset/register', (req, res) => {
    res.send({
      body: req.body,
      url: req.originalUrl
    })
  })

export default router
