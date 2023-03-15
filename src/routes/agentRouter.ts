import getAllAgents from '../controllers/agentController'
var express = require('express')
var agentRouter = express.Router()

agentRouter.get('/', async (req, res, next) => {
  try {
    const agents = await getAllAgents(req, res)
    res.render('agents', { agents })
  } catch (error) {
    res.send(error.message)
  }
})

export default agentRouter
