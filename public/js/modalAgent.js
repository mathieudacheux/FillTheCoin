const addAgent = document.querySelector('.addAgent')
const modalAddAgent = document.querySelector('.modalAddAgent')
const closeModalAddAgent = document.querySelector('.close-modalAccount')

addAgent.addEventListener('click', () => {
  modalAddAgent.classList.add('is-active')
})

closeModalAddAgent.addEventListener('click', () => {
  modalAddAgent.classList.remove('is-active')
})
