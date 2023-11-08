const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Callout',
  context: {
    callout: {
      content: faker.lorem.paragraphs(3, '</p><p>\n')
    }
  }
}
