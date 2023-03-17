import {
  createEstate,
  allEstates,
  deleteEstate,
  updateEstate,
} from '../controllers/estateController'
var express = require('express')
var propertiesRouter = express.Router()

// middleware that is specific to this router
propertiesRouter.get('/', allEstates)

propertiesRouter.post('/add', createEstate)

propertiesRouter.get('/delete/:id', deleteEstate)

propertiesRouter.get('/update/:id', updateEstate)

export default propertiesRouter
