const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Banner',
  context: {
    banner: {
      paragraph: faker.lorem.paragraph()
    }
  }
}
