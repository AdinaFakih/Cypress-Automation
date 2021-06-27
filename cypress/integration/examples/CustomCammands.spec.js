/// <reference types="cypress"/>

describe('CustomSuite',function()
{
    it('Login Test',function(){
       cy.login('admin@yourstore.com','admin') //valid
       cy.title().should('be.equal','Dashboard / nopCommerce administration')

       cy.login('admin@yourstore123.com','admin') //invalid email
       cy.title().should('be.equal','Your store. Login')

       cy.login('admin@yourstore.com','admin123') //invalid password
       cy.title().should('be.equal','Your store. Login')
    })

    it('Add Custom',function(){
        cy.login('admin@yourstore.com','admin') 

        //Script for Adding new customer
        cy.log('Adding new customs')
    })

    it('Edit Custom',function(){
        cy.login('admin@yourstore.com','admin')

        //Script for Editing customer
        cy.log('Editing customs') 
    })
})