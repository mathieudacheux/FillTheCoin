import { getAllEstate } from '../controllers/estateController'
var express = require('express')
var propertiesRouter = express.Router()

// middleware that is specific to this router
propertiesRouter.get('/', async (req, res, next) => {
  try {
    const properties = await getAllEstate(req, res)
    if (req.session.idUser) {
      res.render('properties', { properties, connected: true })
    } else {
      res.render('properties', { properties, connected: false })
    }
  } catch (error) {
    res.send(error.message)
  }
})

export default propertiesRouter
