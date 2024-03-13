const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Instruction Heading',
  context: {
    instruction: {
      text: faker.lorem.sentence()
    }
  }
}
