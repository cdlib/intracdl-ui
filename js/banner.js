// Banner Component //

import { crossFadeTransition } from './transitions.js'
const banner = document.querySelector('.js-banner')
const bannerButton = document.querySelector('.js-banner button')

const bannerHide = () => {
  banner.hidden = true
}

if (banner) {
  bannerButton.addEventListener('click', () => {
    crossFadeTransition(bannerHide)
  })
}
