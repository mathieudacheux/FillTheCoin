import express from 'express'
import { engine } from 'express-handlebars'
import getAllEstate from './controllers/estateController'

// Routers
import articleRouter from './routes/articleRouter'
import userRouter from './routes/userRouter'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')

// Display the home page
app.get('/', async (req, res, next) => {
  try {
    const estates = await getAllEstate(req, res)
    res.render('landingpage', { estates })
  } catch (error) {
    res.send(error.message)
  }
})

app.get('/agents', (req, res) => {
  res.render('agents')
})

app.get('/properties', (req, res) => {
  res.render('properties')
})

// Display the inscription page
app.use('/user', userRouter)

// Display the blog page
app.use('/blog', articleRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
