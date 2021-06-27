/// <reference types="cypress"/>

describe('Testing Login/Logout',function()
{ 
    before(() => {
        // runs once before all tests in the block
        cy.log("This is SET UP block")
    })
      
    beforeEach(() => {
        // runs before each test in the block
        cy.log("This is LOGIN block")
    })
      
    afterEach(() => {
        // runs after each test in the block
        cy.log("This is LOGOUT block")
    })
      
    after(() => {
        // runs once after all tests in the block
        cy.log("This is TEAR DOWN block")
    })

    it('Searching',function(){
        cy.log("This is for Searching Test")
    })
    it('Advanced Searching',function(){
        cy.log("This is for Advanced Searching Test")
    })
    it('Listing Products',function(){
        cy.log("This is for Listing Products Test")
    })
})