const burgerBtn = document.getElementById('burger-btn')
const mobileMenu = document.getElementById('burger-menu')

burgerBtn.addEventListener('click', (e) => {
  if(mobileMenu.classList.contains('visible')) {
    mobileMenu.classList.remove('visible')
    return
  }
  
  mobileMenu.classList.add('visible')
  e.stopPropagation()
  const onClose = (e) => {
    if (e.target.closest('#burger-menu') === null) {
      mobileMenu.classList.remove('visible')
      document.removeEventListener('click', onClose)
    }
  }
  document.addEventListener('click', onClose)
})