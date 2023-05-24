const { faker } = require('@faker-js/faker/locale/en')
const cardData = []

for (var i = 0; i < 15; i++) {
  cardData.push({
    card: {
      title: faker.commerce.productName(),
      image: faker.image.nature(225, 125, true),
      caption: faker.lorem.sentence(),
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
