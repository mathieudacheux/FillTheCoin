import db from '../db'

const getAllArticles = async (req, res) => {
  try {
    const articles = await db.collection('articles').get()
    const articleList = articles.docs.map((doc) => doc.data())
    return articleList
  } catch (error) {
    res.send(error.message)
  }
}

const allArticles = async (req, res) => {
  try {
    const articles = await db.collection('articles').get()
    const articleList = articles.docs.map((doc) => doc.data())
    res.render('blog', { layout: 'main', articles: articleList })
  } catch (error) {
    res.redirect('/')
  }
}

const createArticle = async (req, res) => {
  try {
    const { title, description, image } = req.body
    const uid = db.collection('articles').doc().id
    await db.collection('articles').doc(uid).set({
      id: uid,
      title,
      description,
      image,
    })
    res.redirect('/admin')
  } catch (error) {
    res.send(error.message)
  }
}

const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params
    await db.collection('articles').doc(id).delete()
  } catch (error) {
    res.send(error.message)
  }
}

const updateArticle = async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, image } = req.body
    await db.collection('articles').doc(id).update({
      title,
      description,
      image,
    })
  } catch (error) {
    res.send(error.message)
  }
}

export {
  getAllArticles,
  createArticle,
  deleteArticle,
  updateArticle,
  allArticles,
}
