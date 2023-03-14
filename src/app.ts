import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.use(express.static('public'))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('landingpage')
})

app.get('/blog', (req, res) => {
  res.render('blog')
})

app.get('/agents', (req, res) => {
  res.render('agents')
})

app.get('/properties', (req, res) => {
  res.render('properties')
})

app.listen(3000)
