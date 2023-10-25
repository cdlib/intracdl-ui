// Related Links Component //

import { navToggle as relatedLinksToggle } from './navtoggle.js'
const relatedLinks = document.querySelector('.js-relatedlinks')

if (relatedLinks) {
  const navButton = document.querySelector('.js-relatedlinks button')
  const navList = document.querySelector('.js-relatedlinks__list')

  relatedLinksToggle(navButton, navList)
}
