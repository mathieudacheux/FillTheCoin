import express from 'express'
import { engine } from 'express-handlebars'
import getAllCities from './controllers/citiyController'
import { getAllEstate } from './controllers/estateController'
import { getAllAgents } from './controllers/agentController'
import { getAllArticles } from './controllers/articleController'
import agentRouter from './routes/agentRouter'
import propertiesRouter from './routes/propertiesRouter'
import session from 'express-session'
import SESSION_SERCRET from './config'

// Routers
import articleRouter from './routes/articleRouter'
import userRouter from './routes/userRouter'

const app = express()
app.use(
  session({
    name: 'sessionId',
    secret: SESSION_SERCRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 * 7 },
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')

// const protectionRoute = async (req, res, next) => {
//   if (!req.session.idUser) {
//     const estates = await getAllEstate(req, res)
//     res.redirect('landingpage', { estates })
//   } else {
//     next()
//   }
// }

app.get('/', async (req, res) => {
  try {
    const estates = await getAllEstate(req, res)
    const cities = await getAllCities(req, res)
    if (req.session.idUser) {
      res.render('landingpage', { estates, cities, connected: true })
    } else {
      res.render('landingpage', { estates, cities, connected: false })
    }
  } catch (error) {
    res.send(error.message)
  }
})

app.get('/properties', propertiesRouter)

app.get('/admin', async (req, res) => {
  try {
    const estates = await getAllEstate(req, res)
    res.render('dashboardProperties', { layout: 'dashboard', estates })
  } catch (error) {
    res.send(error.message)
  }
})

app.get('/admin/blog', async (req, res) => {
  try {
    const articles = await getAllArticles(req, res)
    res.render('dashboardBlog', { layout: 'dashboard', articles })
  } catch (error) {
    res.send(error.message)
  }
})

app.get('/admin/agents', async (req, res) => {
  try {
    const agents = await getAllAgents(req, res)
    res.render('dashboardAgents', { layout: 'dashboard', agents })
  } catch (error) {
    res.send(error.message)
  }
})

// Display the inscription page
app.use('/user', userRouter)

// Display the blog page
app.use('/blog', articleRouter)

app.use('/agents', agentRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
