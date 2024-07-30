const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Feature',
  context: {
    feature: {
      caption: faker.lorem.sentence(8),
      image: faker.image.urlPicsumPhotos()
    }
  }
}
