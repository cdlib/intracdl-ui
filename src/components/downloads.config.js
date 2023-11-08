const { faker } = require('@faker-js/faker/locale/en')
const downloadsData = []

for (var i = 0; i < 5; i++) {
  downloadsData.push({
    downloads: {
      linkText: faker.commerce.productName()
    }
  })
}

module.exports = {
  label: 'Downloads',
  context: {
    downloads: downloadsData
  }
}
