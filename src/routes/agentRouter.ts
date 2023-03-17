import {
  createAgent,
  deleteAgent,
  getAllAgents,
  updateAgent,
} from '../controllers/agentController'
var express = require('express')
var agentRouter = express.Router()

agentRouter.get('/', async (req, res, next) => {
  try {
    const agents = await getAllAgents(req, res)
    if (req.session.idUser) {
      res.render('agents', { agents, connected: true })
    } else {
      res.render('agents', { agents, connected: false })
    }
  } catch (error) {
    res.send(error.message)
  }
})

agentRouter.post('/create', createAgent)

agentRouter.post('/update/:id', updateAgent)

agentRouter.post('/delete/:id', deleteAgent)

export default agentRouter
