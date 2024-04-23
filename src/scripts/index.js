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

const handleLabelAnimation = () => {
  const fieldsets = document.querySelectorAll('fieldset')
  // Adiciona classe que altera a propriedade TOP da label
  fieldsets.forEach(fieldset => {
    fieldset.children[1].addEventListener('focus', () => { fieldset.children[0].classList.add('valid') })
  })
  // Remove a classe que altera a propriedade TOP da label se o input estiver vazio
  fieldsets.forEach(fieldset => {
    console.log(fieldset.children[1].value);
    fieldset.children[1].addEventListener('focusout', () => { if(fieldset.children[1].value.length === 0) { fieldset.children[0].classList.remove('valid') } })
  })
}

const handleButtonDisabled = () => {
  const buttonSubmit = document.querySelector('.feedback__form button')

  buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const hour = date.getHours()

    // Aqui virá a lógica para bloquear o botão até o fim da apresentação, aguardando data e horário!
  })
}

handleMobileNavBar()
handleCloseNavbarNavigate()
handleLabelAnimation()
handleButtonDisabled()