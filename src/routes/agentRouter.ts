import {
  allAgents,
  createAgent,
  deleteAgent,
  updateAgent,
} from '../controllers/agentController'
var express = require('express')
var agentRouter = express.Router()

agentRouter.get('/', allAgents)

agentRouter.post('/add', createAgent)

agentRouter.post('/update/:id', updateAgent)

agentRouter.get('/delete/:id', deleteAgent)

export default agentRouter
