// import { mockState } from '../support/utils/helpers';
// import { Responses } from '../support/types';

describe('Game Cycle', () => {
  it('Game setup', () => {
    cy.visit('http://localhost:3001/');
    cy.get('button').click();
  })
})