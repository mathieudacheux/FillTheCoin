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
    return res.redirect('/admin/agents')
  }
}

const deleteAgent = async (req, res) => {
  try {
    const { id } = req.params
    await db.collection('agents').doc(id).delete()
    return res.redirect('/admin/agents')
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
    return res.redirect('/admin/agents')
  } catch (error) {
    return res.redirect('/admin/agents')
  }
}

export { getAllAgents, createAgent, deleteAgent, updateAgent }
