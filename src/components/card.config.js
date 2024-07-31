const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Card',
  collated: true,
  context: {
    card: {
      title: faker.commerce.productName(),
      image: faker.image.urlPicsumPhotos(),
      link1: '',
      caption: faker.lorem.paragraph(),
      link2: faker.commerce.productName()
    }
  },
  variants: [
    {
      name: '2', // virtually creates card--2.hbs
      context: {
        card: {
          title: faker.commerce.productName(),
          image: faker.image.urlPicsumPhotos(),
          link1: 'Logo Guidelines',
          caption: '',
          link2: 'Download ZIP (EPS, PNG, SVG)'
        }
      }
    }
  ]
}
