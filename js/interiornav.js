// Interior Navigation Component //

import { navToggle as interiorNavToggle } from './navtoggle.js'
const interiorNav = document.querySelector('.js-interiornav')

if (interiorNav) {
  const navButton = document.querySelector('.js-interiornav button')
  const navList = document.querySelector('.js-interiornav__list')

  interiorNavToggle(navButton, navList)
}
