const buttonLoginDesktop = document.querySelector('.logButtonDesktop')
const buttonLoginMobile = document.querySelector('.logButtonMobile')

const modalLogin = document.querySelector('.logModal')
const closeModalLogin = document.querySelector('.close-modal')

const buttonRegister = document.querySelector('.registerButton')
const modalRegister = document.querySelector('.registerModal')
const closeRegister = document.querySelector('.close-modalRegister')

const link = document.querySelector('.openModal')
const burger = document.querySelector('.containerBurger')
const ul = document.querySelector('.mobileNavList')

const openNavMobileView = (e) => {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
}

buttonLoginDesktop.addEventListener('click', () => {
  modalLogin.classList.add('is-active')
})

buttonLoginMobile.addEventListener('click', () => {
  modalLogin.classList.add('is-active')
})

buttonLoginMobile.addEventListener('click', (e) => {
  openNavMobileView(e)
})

link.addEventListener('click', (e) => {
  openNavMobileView(e)
})

closeModalLogin.addEventListener('click', () => {
  modalLogin.classList.remove('is-active')
})

buttonRegister.addEventListener('click', () => {
  modalRegister.classList.add('is-active')
  modalLogin.classList.remove('is-active')
})

closeRegister.addEventListener('click', () => {
  modalRegister.classList.remove('is-active')
})

const buttonAccountMobile = document.querySelector('.accountButtonMobile')
const buttonAccountDesktop = document.querySelector('.accountButtonDesktop')
const closeModalAccount = document.querySelector('.close-modalAccount')

const modalAccount = document.querySelector('.accountModal')

buttonAccountDesktop.addEventListener('click', () => {
  modalAccount.classList.add('is-active')
})

buttonAccountMobile.addEventListener('click', (e) => {
  openNavMobileView(e)
})

closeModalAccount.addEventListener('click', () => {
  modalAccount.classList.remove('is-active')
})

buttonAccountDesktop.addEventListener('click', () => {
  modalAccount.classList.add('is-active')
})
