const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Blockquotes',
  context: {
    blockquote: {
      paragraphs: faker.lorem.paragraphs(3, '</p>\n<p>')
    }
  }
}
