const { faker } = require('@faker-js/faker/locale/en')
const logos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const cardData = []

for (const logo of logos) {
  cardData.push({
    logo: {
      institution: faker.commerce.productName(),
      image: 'https://files.axshare.com/gsc/MWNJ3F/51/04/b5/5104b527ebd5496eb53f6a198127037a/images/interior-page_logo-index_campuses/p' + logo + '.svg?pageId=b295d073-b030-4e99-b185-d8d2b84fc8fb',
      guidelines: 'Logo Guidelines',
      download: 'Download ZIP (EPS, PNG, SVG)'
    }
  })
}

module.exports = {
  label: 'Gallery Narrow Logos',
  context: {
    logo: cardData
  }
}
