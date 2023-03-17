import db from '../db'

const getAllEstate = async (req, res) => {
  try {
    const estates = await db.collection('estates').get()
    const estateList = estates.docs.map((doc) => doc.data())
    return estateList
  } catch (error) {
    res.send(error.message)
  }
}

const allEstates = async (req, res) => {
  try {
    const estates = await db.collection('estates').get()
    const estateList = estates.docs.map((doc) => doc.data())
    res.render('properties', { layout: 'main', estates: estateList })
  } catch (error) {
    res.redirect('/')
  }
}

const createEstate = async (req, res) => {
  try {
    const { address, description, country, city, price, image } = req.body
    const uid = db.collection('estates').doc().id
    await db.collection('estates').doc(uid).set({
      id: uid,
      address,
      description,
      country,
      city,
      price,
      image,
    })
    res.redirect('/admin')
  } catch (error) {
    res.send(error.message)
  }
}

const deleteEstate = async (req, res) => {
  try {
    const { id } = req.params
    await db.collection('estates').doc(id).delete()
  } catch (error) {
    res.send(error.message)
  }
}

const updateEstate = async (req, res) => {
  try {
    const { id } = req.params
    const { address, description, country, city, price, image } = req.body
    await db.collection('estates').doc(id).update({
      address,
      description,
      country,
      city,
      price,
      image,
    })
  } catch (error) {
    res.send(error.message)
  }
}

export { getAllEstate, createEstate, deleteEstate, updateEstate, allEstates }
