const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Described By',
  context: {
    describedby: {
      id: 'description-1',
      text: faker.lorem.paragraph()
    }
  }
}
