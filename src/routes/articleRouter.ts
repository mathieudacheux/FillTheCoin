import getAllArticles from '../controllers/articleController'
var express = require('express')
var articleRouter = express.Router()

// middleware that is specific to this router
articleRouter.get('/', async (req, res, next) => {
  try {
    const articles = await getAllArticles(req, res)
    res.render('blog', { articles })
  } catch (error) {
    res.send(error.message)
  }
})

export default articleRouter
