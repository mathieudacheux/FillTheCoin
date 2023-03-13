import express from 'express'
import { engine } from 'express-handlebars'
import { userGet } from './controllers/userController'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', async (req, res, next) => {
  let usersList = await userGet(req, res, next)
  res.render('home', {
    users: usersList,
  })
})

app.listen(3000)
