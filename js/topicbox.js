// Topic Box Component Toggle //

import { crossFadeTransition } from './transitions.js'
const topicBoxes = document.querySelectorAll('.js-topicbox')
const homeTemplate = document.querySelector('.js-home')
const topicBoxMediaQuery = window.matchMedia('(width > 50rem)')

for (const topicBox of topicBoxes) {
  const boxButton = topicBox.querySelector('.js-topicbox button')
  const boxContent = topicBox.querySelector('.js-topicbox__content')
  const homeSectionColumns = window.getComputedStyle(homeTemplate).getPropertyValue('--home-section-columns')

  const boxOpen = () => {
    boxButton.setAttribute('aria-expanded', true)
    boxButton.setAttribute('aria-label', 'close')
    boxContent.hidden = false
  }

  const boxClose = () => {
    boxButton.setAttribute('aria-expanded', false)
    boxButton.setAttribute('aria-label', 'open')
    boxContent.hidden = true
  }

  const buttonToggle = () => {
    if (boxButton.getAttribute('aria-expanded') === 'false') {
      boxOpen()
    } else {
      boxClose()
    }
  }

  boxButton.addEventListener('click', () => crossFadeTransition(buttonToggle))

  const topicBoxToggle = e => {
    if (e.matches) {
      boxButton.hidden = true
      homeTemplate.style.setProperty('--home-section-columns', homeSectionColumns)
      boxOpen()
    } else {
      boxButton.hidden = false
      homeTemplate.style.setProperty('--home-section-columns', 'auto') // set grid columns to one column
      boxClose()
    }
  }

  topicBoxMediaQuery.addEventListener('change', topicBoxToggle)
  topicBoxToggle(topicBoxMediaQuery)
}
