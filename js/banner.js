// Banner Component //

const banner = document.querySelector('.js-banner')
const bannerButton = document.querySelector('.js-banner button')

if (banner) {
  bannerButton.addEventListener('click', () => {
    banner.hidden = true
  })
}
