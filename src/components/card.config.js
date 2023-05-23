const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Card',
  collated: true,
  context: {
    card: {
      title: faker.commerce.productName(),
      image: faker.image.nature(225, 125),
      caption: faker.lorem.paragraph(),
    }
  }
}
