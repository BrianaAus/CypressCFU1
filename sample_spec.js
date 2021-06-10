

//https://docs.cypress.io/guides/getting-started/writing-your-first-test#Step-4-Make-an-assertion


/* //First Passing test
describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
}) */



/* 
const { isTypedArray } = require("node:util/types")

//First failing Test
describe('My First Test', () => {
   it('Does not do much!', () => {
       expect(true).to.equal(false)
   })
}) */

/* describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
    })
  }) */

/*   describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type')
    })
  }) */

 /*  describe('My First Test', () => {
    it('clicks the link "type"', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
    })
  }) */

/*   describe('My First Test', () => {
    it('clicking "type" navigates to a new url', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
    })
  }) */

  describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })

/*   Visit: https://example.cypress.io
Find the element with content: type
Click on it
Get the URL
Assert it includes: /commands/actions
Get the input with the .action-email class
Type fake@email.com into the input
Assert the input reflects the new value */