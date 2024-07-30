const { faker } = require('@faker-js/faker/locale/en')
const cardData = []

for (var i = 0; i < 15; i++) {
  cardData.push({
    card: {
      title: faker.commerce.productName(),
      image: faker.image.urlPicsumPhotos(),
      link1: '',
      caption: faker.lorem.sentence(),
      link2: faker.commerce.productName()
    }
  })
}

module.exports = {
  label: 'Gallery Narrow',
  collated: true,
  context: {
    card: cardData
  }
}
