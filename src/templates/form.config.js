const { faker } = require('@faker-js/faker/locale/en')

module.exports = {
  label: 'Form',
  context: {
    element1: {
      label: {
        for: 'input-1',
        text: 'Name'
      },
      input: {
        type: 'text',
        id: 'input-1',
        required: true
      }
    },
    element2: {
      label: {
        for: 'input-2',
        text: 'Email'
      },
      describedby: {
        id: 'description-2',
        text: faker.lorem.paragraph()
      },
      input: {
        type: 'email',
        id: 'input-2',
        describedby: 'description-2',
        required: true
      }
    },
    element3: {
      label: {
        for: 'input-3',
        text: 'Project Description'
      },
      describedby: {
        id: 'description-3',
        text: faker.lorem.paragraph()
      },
      textarea: {
        id: 'input-3',
        describedby: 'description-3',
        required: true
      }
    },
    element4: {
      label: {
        for: 'input-4',
        text: 'Scope of Work'
      },
      describedby: {
        id: 'description-4',
        text: faker.lorem.sentence()
      },
      input: {
        type: 'text',
        id: 'input-4',
        describedby: 'description-4',
        required: true
      }
    },
    element5: {
      label: {
        for: 'input-5',
        text: 'Why Another Field To Complete?'
      },
      describedby: {
        id: 'description-5',
        text: faker.lorem.paragraph()
      },
      textarea: {
        id: 'input-5',
        describedby: 'description-5',
        required: false
      }
    },
    element6: {
      label: {
        for: 'input-6',
        text: 'Just One More Question If You Have The Time'
      },
      describedby: {
        id: 'description-6',
        text: faker.lorem.paragraph()
      },
      input: {
        type: 'text',
        id: 'input-6',
        describedby: 'description-6',
        required: false
      }
    }
  }
}
