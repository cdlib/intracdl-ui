const { faker } = require('@faker-js/faker/locale/en');

module.exports = {
  label: 'Links',
  collated: true,
  context: {
    link: {
      text: faker.lorem.words(5)
    },
    link1: {
      text: faker.lorem.words(5)
    },
    link2: {
      text: faker.lorem.words(5)
    }
  }
}
