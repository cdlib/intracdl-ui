const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Details',
  context: {
    details: {
      summary1: faker.commerce.productName(),
      content1: faker.lorem.paragraphs(3, '</p>\n<p>'),
      summary2: faker.commerce.productName() + ' with ' + faker.commerce.productName(),
      content2: faker.lorem.paragraphs(3, '</p>\n<p>'),
      summary3: faker.commerce.productName(),
      content3: faker.lorem.paragraphs(3, '</p>\n<p>')
    }
  }
}
