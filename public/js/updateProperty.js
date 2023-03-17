const updateBlog = document.querySelectorAll('.openUpdateModal')
const modalUpdateBlog = document.querySelector('.modalUpdateBlog')
const closeBlog = document.querySelector('.close-modalUpdateBlog')

updateBlog.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    modalUpdateBlog.classList.add('is-visible')
    const card = e.target.parentElement.parentElement
    const image = card.querySelector('.imgAgent').src
    console.log(image)
    const name = card.querySelector('.nameAgent').textContent.trim()
    console.log(name)
    const description = card.querySelector('.description').textContent.trim()
    console.log(description)
    const phone = card.querySelector('.phone-number').textContent.trim()
    console.log(phone)
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
