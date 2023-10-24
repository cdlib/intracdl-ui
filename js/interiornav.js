// Interior Nav Component Toggle //

const interiorNav = document.querySelector('.js-interiornav')
const navButton = document.querySelector('.js-interiornav button')
const navList = document.querySelector('.js-interiornav__list')
const navMediaQuery = window.matchMedia('(width > 50rem)')

if (interiorNav) {
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

  const interiorNavToggle = e => {
    if (e.matches) {
      navButton.hidden = true
      navOpen()
    } else {
      navButton.hidden = false
      navClose()
    }
  }

  navMediaQuery.addEventListener('change', interiorNavToggle)
  interiorNavToggle(navMediaQuery)
}
