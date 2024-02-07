const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Card for Logo',
  context: {
    logo: {
      institution: faker.commerce.productName(),
      image: 'https://files.axshare.com/gsc/MWNJ3F/51/04/b5/5104b527ebd5496eb53f6a198127037a/images/interior-page_logo-index_campuses/p0.svg?pageId=b295d073-b030-4e99-b185-d8d2b84fc8fb',
      guidelines: 'Logo Guidelines',
      download: 'Download ZIP (EPS, PNG, SVG)'
    }
  }
}
