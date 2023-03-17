import { createEstate, allEstates } from '../controllers/estateController'
var express = require('express')
var propertiesRouter = express.Router()

// middleware that is specific to this router
propertiesRouter.get('/', allEstates)

propertiesRouter.post('/add', createEstate)

export default propertiesRouter
