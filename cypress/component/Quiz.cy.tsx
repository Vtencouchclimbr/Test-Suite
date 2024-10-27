// import React from 'react'
import Quiz from '../../client/src/components/Quiz'

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