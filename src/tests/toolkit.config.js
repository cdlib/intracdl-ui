const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'Toolkit',
  context: {
    toolkit: {
      paragraph: faker.lorem.paragraphs()
    }
  }
}
