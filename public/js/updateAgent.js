const openUpdateModal = document.querySelectorAll('.openUpdateModal')
const modalUpdateAgent = document.querySelector('.modalUpdateAgent')
const closeUpdateModal = document.querySelector('.close-modalUpdate')

openUpdateModal.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    modalUpdateAgent.classList.add('is-display')
    const card = e.target.parentElement.parentElement
    const address = card.querySelector('.address-property').textContent.trim()
    const image = card.querySelector('.img-property').src
    const price = card.querySelector('.price-property').textContent.slice(1)
    const city = card.querySelector('.city-property').textContent
    const description = card.querySelector('.description-property').textContent
    const id = card.querySelector('a').href.split('/')[5]

    const addressForm = document.querySelector('#addressForm')
    const descriptionForm = document.querySelector('#descriptionForm')
    const cityForm = document.querySelector('#cityForm')
    const priceForm = document.querySelector('#priceForm')
    const imageForm = document.querySelector('#imageForm')

    // Set the value of the form
    addressForm.value = address
    descriptionForm.value = description
    cityForm.value = city
    priceForm.value = price
    imageForm.value = image

    // Set the action of the form
    const form = document.querySelector('#updatePropertyForm')
    form.action = `/properties/update/${id}`
  })
})

closeUpdateModal.addEventListener('click', () => {
  modalUpdateAgent.classList.remove('is-display')
})
