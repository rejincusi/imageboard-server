const { Router } = require('express')
const Image = require('../image/model')
const router = new Router()

router.get('/image', ( req, res, next ) => {
  Image
    .findAll()
    .then( imageResponse => res.json( imageResponse ))
    .catch(next)
})

module.exports = router