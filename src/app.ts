import express from 'express'
import { engine } from 'express-handlebars'
import { getUser, postUser } from './controllers/userController'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/user', async (req, res, next) => {
  let usersList = await getUser(req, res, next)

  res.render('user', {
    usersList,
  })
})

app.post('/user/add', (req, res) => {
  let postObject = {
    email: req.body.mail,
    password: req.body.password,
  }
  postUser(postObject)
  res.redirect('/user')
})

app.listen(3000)
