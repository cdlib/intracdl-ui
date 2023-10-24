// ***** Navigation Toggle ***** //

const navToggle = (navButton, navList) => {
  const navMediaQuery = window.matchMedia('(width > 50rem)')

  const navOpen = () => {
    navButton.setAttribute('aria-expanded', true)
    navButton.setAttribute('aria-label', 'close')
    navList.hidden = false
  }

  const navClose = () => {
    navButton.setAttribute('aria-expanded', false)
    navButton.setAttribute('aria-label', 'open')
    navList.hidden = true
  }

  navButton.addEventListener('click', () => {
    if (navButton.getAttribute('aria-expanded') === 'false') {
      navOpen()
    } else {
      navClose()
    }
  })

  const navMediaQueryToggle = e => {
    if (e.matches) {
      navButton.hidden = true
      navOpen()
    } else {
      navButton.hidden = false
      navClose()
    }
  }

  navMediaQuery.addEventListener('change', navMediaQueryToggle)
  navMediaQueryToggle(navMediaQuery)
}

export { navToggle }
