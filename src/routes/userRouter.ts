import postUser from '../controllers/userController'
var express = require('express')
var articleRouter = express.Router()

// middleware that is specific to this router
articleRouter.post('/create', postUser)
articleRouter.get('/', (req, res, next) => {
  try {
    res.render('user')
  } catch (error) {
    res.send(error.message)
  }
})

export default articleRouter
