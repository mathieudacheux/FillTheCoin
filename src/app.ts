import express from 'express'
import { engine } from 'express-handlebars'
import { userGet } from './controllers/userController'

const app = express()

app.use(express.static('public'))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('signIn')
})

app.listen(3000)
