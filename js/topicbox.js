// Topic Box Component Toggle //

const topicBoxes = document.querySelectorAll('.js-topicbox')
const homeTemplate = document.querySelector('.js-home')
const homeSectionColumns = window.getComputedStyle(homeTemplate).getPropertyValue('--home-section-columns')
const topicBoxMediaQuery = window.matchMedia('(width > 50rem)')

for (const topicBox of topicBoxes) {
  const boxButton = topicBox.querySelector('.js-topicbox button')
  const boxContent = topicBox.querySelector('.js-topicbox__content')

  boxButton.addEventListener('click', () => {
    if (boxButton.getAttribute('aria-expanded') === 'false') {
      boxButton.setAttribute('aria-expanded', true)
      boxButton.setAttribute('aria-label', 'close')
      boxContent.hidden = false
    } else {
      boxButton.setAttribute('aria-expanded', false)
      boxButton.setAttribute('aria-label', 'open')
      boxContent.hidden = true
    }
  })

  const topicBoxToggle = e => {
    if (e.matches) {
      boxButton.hidden = true
      boxButton.setAttribute('aria-expanded', true)
      boxButton.setAttribute('aria-label', 'close')
      boxContent.hidden = false
      homeTemplate.style.setProperty('--home-section-columns', homeSectionColumns)
    } else {
      boxButton.hidden = false
      boxButton.setAttribute('aria-expanded', false)
      boxButton.setAttribute('aria-label', 'open')
      boxContent.hidden = true
      homeTemplate.style.setProperty('--home-section-columns', 'auto') // set grid columns to one column
    }
  }

  topicBoxMediaQuery.addEventListener('change', topicBoxToggle)
  topicBoxToggle(topicBoxMediaQuery)
}
