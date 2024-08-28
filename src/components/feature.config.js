const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Feature',
  context: {
    feature: {
      caption: faker.lorem.sentences(2, '</p>\n<p>'),
      image: faker.image.urlPicsumPhotos()
    }
  }
}
