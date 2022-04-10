const openButton = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.hamburger__menu')
const closeButton = document.querySelector('.hamburger__menu--close')


openButton.addEventListener('click', (e) => {
  e.preventDefault()
  hamburgerMenu.classList.add('active')
})

closeButton.addEventListener('click', (e) => {
  e.preventDefault()
  hamburgerMenu.classList.remove('active')
})

hamburgerMenu.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('menu__link')) {
    hamburgerMenu.classList.remove('active')
  }
});
