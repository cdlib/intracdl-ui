// Interior Nav Component Toggle //

const interiorNav = document.querySelector('.js-interiornav')
const navButton = document.querySelector('.js-interiornav button')
const navList = document.querySelector('.js-interiornav__list')
const navMediaQuery = window.matchMedia('(width > 50rem)')

if (interiorNav) {
  navButton.addEventListener('click', () => {
    if (navButton.getAttribute('aria-expanded') === 'false') {
      navButton.setAttribute('aria-expanded', true)
      navButton.setAttribute('aria-label', 'close')
      navList.hidden = false
    } else {
      navButton.setAttribute('aria-expanded', false)
      navButton.setAttribute('aria-label', 'open')
      navList.hidden = true
    }
  })

  const interiorNavToggle = e => {
    if (e.matches) {
      navButton.hidden = true
      navButton.setAttribute('aria-expanded', true)
      navButton.setAttribute('aria-label', 'close')
      navList.hidden = false
    } else {
      navButton.hidden = false
      navButton.setAttribute('aria-expanded', false)
      navButton.setAttribute('aria-label', 'open')
      navList.hidden = true
    }
  }

  navMediaQuery.addEventListener('change', interiorNavToggle)
  interiorNavToggle(navMediaQuery)
}
