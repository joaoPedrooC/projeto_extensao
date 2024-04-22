const handleMobileNavBar = () => {
  const menuContainer = document.querySelector('.header__mobile--container')
  menuContainer.addEventListener('click', () => {
    const mobileNavbar = document.querySelector('.header__mobile--nav')
    mobileNavbar.classList.toggle('hidden')
    menuContainer.classList.toggle('active')
  })
}

const handleCloseNavbarNavigate = () => {
  const mobileMenuLinks = document.querySelectorAll('.header__navbar-ul--mobile > li')
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.header__mobile--container').classList.remove('active')
      document.querySelector('.header__mobile--nav').classList.add('hidden')
    })
  })
}

handleMobileNavBar()
handleCloseNavbarNavigate()