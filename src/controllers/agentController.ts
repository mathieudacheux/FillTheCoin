import db from '../db'

const getAllAgents = async (req, res) => {
  try {
    const agents = await db.collection('agents').get()
    const agentList = agents.docs.map((doc) => doc.data())
    return agentList
  } catch (error) {
    res.send(error.message)
  }
}

export default getAllAgents
