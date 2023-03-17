const updateBlog = document.querySelectorAll('.openUpdateBlog')
const modalUpdateBlog = document.querySelector('.modalUpdateBlog')
const closeBlog = document.querySelector('.close-modalUpdateBlog')

updateBlog.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    modalUpdateBlog.classList.add('is-visible')
    const card = e.target.parentElement.parentElement
    const image = card.querySelector('.imgBlog').src.trim()
    const title = card.querySelector('.titleBlog').textContent.trim()
    const description = card.querySelector('.description').textContent.trim()

    const descriptionForm = document.querySelector('#descriptionForm')
    const titleForm = document.querySelector('#titleForm')
    const imageForm = document.querySelector('#imageForm')

    // Set the value of the form
    titleForm.value = title
    descriptionForm.value = description
    imageForm.value = image

    // Set the action of the form
    const form = document.querySelector('#updateBlogForm')
    form.action = `/properties/update/${id}`
  })
})

closeBlog.addEventListener('click', () => {
  modalUpdateBlog.classList.remove('is-visible')
})
