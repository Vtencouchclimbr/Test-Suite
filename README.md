# Title
## Cypress Testing Suite

  ![License](https://img.shields.io/badge/license-mit-blue.svg)
  
## Description
A testing suite application built with the MERN stack (MongoDB, Express.js, React, Node.js) leverages Cypress for end-to-end testing, ensuring smooth user interactions and robust performance. This application allows developers to write and execute tests within an intuitive interface, simulating real user scenarios across different browser environments. Cypress’s powerful testing capabilities, paired with the scalability of MERN, provide an efficient, integrated solution to validate front-end behavior, backend API responses, and database functionality, ultimately enhancing code quality and reliability in production.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Video](#video)
- [Tests](#tests)
- [Questions](#questions)

## Installation
1. Clone the repository: `git clone <your-repo-url>` 
2. Navigate to the project directory: `cd <your-repo-directory>` 
3. Install dependencies: `npm install`
4. Build the server: `npm run build`
5. Build the client: `npm run client:build`
6. Start the application: `npm run start:dev`
7. Start the Cypress testing suite: `npm run cypress`

## Usage
The Cypress testing suite allows for comprehensive functionality testing by simulating real user interactions within the application. It enables thorough validation of UI elements, backend API responses, and data consistency, ensuring that the app behaves as expected across different user scenarios. By automating these tests, Cypress helps maintain stability and performance throughout development and deployment.

## Features

Test if game starts e2e
``` 
describe('Game Cycle', () => {
  it('Game setup', () => {
    cy.visit('http://localhost:3001/');
    cy.get('button').click();
  })
})

```

Test if game component mounts
``` 
describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  })
  it('starts quiz', () => {
    cy.mount(<Quiz />)
    cy.get('button').click()
    cy.get('button').should('exist')
  })
})
```

## Contributing
At this time, contributions are not being accepted for this project.

## License
This project is licensed under the MIT license.

## Video
[Watch the walkthrough video using this Google Drive Link](https://drive.google.com/file/d/1S4o41paJHhosRmwh4bGMLkv6vQiqLkAf/view?usp=drive_link)

## Tests
There are currently no tests written for this application.

## Questions
If you have any questions, please reach out to me:
- Github: [vtencouchclimbr](https://github.com/vtencouchclimbr)
- Email: lmntrylmnt@gmail.com
  