import {
  allArticles,
  createArticle,
  deleteArticle,
  getAllArticles,
  updateArticle,
} from '../controllers/articleController'
var express = require('express')
var articleRouter = express.Router()

// middleware that is specific to this router
articleRouter.get('/', async (req, res, next) => {
  try {
    const articles = await getAllArticles(req, res)
    if (req.session.idUser) {
      res.render('blog', { articles, connected: true })
    } else {
      res.render('blog', { articles, connected: false })
    }
  } catch (error) {
    res.send(error.message)
  }
})

articleRouter.get('/', allArticles)

articleRouter.post('/add', createArticle)

articleRouter.get('/delete/:id', deleteArticle)

articleRouter.post('/update/:id', updateArticle)

export default articleRouter
