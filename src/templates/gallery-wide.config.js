const { faker } = require('@faker-js/faker/locale/en')
const cardData = []

for (var i = 0; i < 15; i++) {
  cardData.push({
    card: {
      title: faker.commerce.productName(),
      image: faker.image.nature(225, 125, true),
      link1: '',
      caption: faker.lorem.sentences(2),
      link2: faker.commerce.productName()
    }
  })
}

module.exports = {
  label: 'Gallery Wide',
  collated: true,
  context: {
    card: cardData
  }
}
