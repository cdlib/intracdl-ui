const { faker } = require('@faker-js/faker/locale/en');

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

module.exports = {
  label: 'Sample Content',
  context: {
    content: {
      heading1: titleCase(faker.lorem.words(5)),
      heading2: titleCase(faker.lorem.words(3)),
      heading3: titleCase(faker.lorem.words(4)),
      heading4: titleCase(faker.lorem.words(2)),
      paragraph1: faker.lorem.paragraphs(),
      paragraph2: faker.lorem.paragraphs(1),
      paragraph3: faker.lorem.paragraphs(1),
      paragraph4: faker.lorem.paragraphs(1),
      paragraph5: faker.lorem.paragraphs(2, '</p>\n'),
      words1: faker.lorem.sentence(),
      words2: faker.lorem.sentence(),
      words3: faker.lorem.sentence(),
      email: faker.internet.email()
    }
  }
}
