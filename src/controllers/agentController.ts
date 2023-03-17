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

const allAgents = async (req, res, next) => {
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
}

const createAgent = async (req, res) => {
  try {
    const { name, description, phone, image } = req.body
    const uid = db.collection('agents').doc().id
    await db.collection('agents').doc(uid).set({
      id: uid,
      name,
      description,
      phone,
      image,
    })
    return res.redirect('/admin/agents')
  } catch (error) {
    res.send(error.message)
  }
}

const deleteAgent = async (req, res) => {
  try {
    const { id } = req.params
    await db.collection('agents').doc(id).delete()
    res.redirect('/admin/agents')
  } catch (error) {
    return res.redirect('/admin/agents')
  }
}

const updateAgent = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, phone, image } = req.body
    await db.collection('agents').doc(id).update({
      name,
      description,
      phone,
      image,
    })
    res.redirect('/admin/agents')
  } catch (error) {
    res.send(error.message)
  }
}

export { getAllAgents, createAgent, deleteAgent, updateAgent, allAgents }
