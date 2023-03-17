import express from 'express'
import { engine } from 'express-handlebars'
import getAllCities from './controllers/citiyController'
import { get4LastEstate, getAllEstate } from './controllers/estateController'
import { getAllAgents } from './controllers/agentController'
import { getAllArticles } from './controllers/articleController'
import { isAdmin } from './controllers/userController'
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

app.get('/', async (req, res) => {
  try {
    const estates = await get4LastEstate(req, res)
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

app.use('/properties', propertiesRouter)

app.get('/admin', async (req, res) => {
  try {
    isAdmin(req, function (admin) {
      if (!admin) {
        return res.redirect('/')
      } else {
        getAllEstate(req, res).then((estates) => {
          return res.render('dashboardProperties', {
            layout: 'dashboard',
            estates,
          })
        })
      }
    })
  } catch (error) {
    res.send(error.message)
  }
})

app.get('/admin/blog', async (req, res) => {
  try {
    isAdmin(req, function (admin) {
      if (!admin) {
        return res.redirect('/')
      } else {
        const articles = getAllArticles(req, res)
        return res.render('dashboardBlog', { layout: 'dashboard', articles })
      }
    })
  } catch (error) {
    res.send(error.message)
  }
})

app.get('/admin/agents', async (req, res) => {
  try {
    isAdmin(req, function (admin) {
      if (!admin) {
        return res.redirect('/')
      } else {
        const agents = getAllAgents(req, res)
        return res.render('dashboardAgents', { layout: 'dashboard', agents })
      }
    })
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
