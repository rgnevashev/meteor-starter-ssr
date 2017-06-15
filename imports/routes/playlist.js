import router from './router'

router
  .get('/playlist', (req, res) => {
    res.send({
      url: req.originalUrl
    })
  })
  .post('/playlist', (req, res) => {
    res.send({
      body: req.body,
      url: req.originalUrl
    })
  })
  .post('/playlist', (req, res) => {
    res.send({
      body: req.body,
      url: req.originalUrl
    })
  })
  .put('/playlist/:playlistId', (req, res) => {
    res.send({
      body: req.body,
      url: req.originalUrl,
      params: req.params
    })
  })
  .put('/playlist/:playlistId/register', (req, res) => {
    res.send({
      body: req.body,
      url: req.originalUrl,
      params: req.params
    })
  })
  .put('/playlist/:playlistId/unpair', (req, res) => {
    res.send({
      body: req.body,
      url: req.originalUrl,
      params: req.params
    })
  })

export default router
