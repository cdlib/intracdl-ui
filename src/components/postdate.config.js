const { faker } = require('@faker-js/faker/locale/en')
const fakerDate = faker.date.past()
const dateUnformatted = new Date(fakerDate)
const dateFormat = {year: 'numeric', month: 'long', day: 'numeric'} // example: April 12, 2022
const postDate = dateUnformatted.toLocaleDateString('en-US', dateFormat)

module.exports = {
  label: 'Post Date',
  context: {
    postdate: {
      name: faker.person.fullName(),
      date: postDate
    }
  }
}
