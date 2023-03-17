const updateBlog = document.querySelectorAll('.openUpdateModal')
const modalUpdateBlog = document.querySelector('.modalUpdateBlog')
const closeBlog = document.querySelector('.close-modalUpdateBlog')

updateBlog.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    modalUpdateBlog.classList.add('is-visible')
    const card = e.target.parentElement.parentElement
    const image = card.querySelector('.imgAgent').src

    const name = card.querySelector('.nameAgent').textContent.trim()

    const description = card.querySelector('.description').textContent.trim()

    const phone = card.querySelector('.phone-number').textContent.trim()
    const id = card.querySelector('a').href.split('/')[5]

    const nameForm = document.querySelector('#nameForm')
    const descriptionForm = document.querySelector('#descriptionForm')
    const telForm = document.querySelector('#telForm')
    const imageForm = document.querySelector('#imageForm')

    // Set the value of the form
    nameForm.value = name
    descriptionForm.value = description
    imageForm.value = image
    telForm.value = phone

    // Set the action of the form
    const form = document.querySelector('#updateBlogForm')
    form.action = `/agent/update/${id}`
  })
})

closeBlog.addEventListener('click', () => {
  modalUpdateBlog.classList.remove('is-visible')
})
