const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Paragraphs',
  context: {
    paragraphs: faker.lorem.paragraphs(5, '</p>\n<p>')
  }
}
