/// <reference types="cypress"/>

describe('TestSuite',function()
{
    it('Navigations Tests',function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store') //Home
        
        cy.get('.ico-register').contains('Reg').click()
        cy.title().should('eq','nopCommerce demo store. Register') //Reg Page
        
        cy.go('back')
        cy.title().should('eq','nopCommerce demo store') //Home
        
        cy.go('forward')
        cy.title().should('eq','nopCommerce demo store. Register') //Reg Page

        cy.go(-1)//back
        cy.title().should('eq','nopCommerce demo store') //Home

        cy.go(1)//forward
        cy.title().should('eq','nopCommerce demo store. Register') //Reg Page

        cy.reload()
    })
})