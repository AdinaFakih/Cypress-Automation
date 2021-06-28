/// <reference types="cypress"/>

describe('Test Conduit',function()
{
    before(() => {
        cy.log("This is SET UP block")
    })  
    beforeEach(() => {
        cy.Conduit_SignIn('adoo@xx.com','12345678')//valid username email password
    }) 
    afterEach(() => {
        cy.log("This is LOGOUT block")
    })
    after(() => {
        cy.log("This is TEAR DOWN block")
    })
    it('Test Sign In Page ',function(){
        cy.wait(1000)
        cy.Conduit_SignIn('adoo@xx.com','12345678')//valid username email password
        cy.wait(1000)
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')
    })

    it('Create a post',function(){
        for (let i=0; i<2; i++){
            cy.wait(1000)
            cy.contains('New Post').should('be.visible').click()
            cy.hash().should('include','#/editor')
            cy.location('hash').should('include','#/editor')
            cy.get("input[placeholder='Article Title']").type("yayahay")
            cy.get('input[placeholder="What\'s this article about?"]').type("yayahay")
            cy.get('textarea[placeholder="Write your article (in markdown)"]').type("yayahay")
            cy.get('input[placeholder="Enter tags"]').type("yayahay")
            cy.wait(1000)
            cy.contains("Publish Article").should('be.visible').click()
        }    
    })
    
    // it('Your Settings',function(){
    //     cy.contains('Settings').should('be.visible').click()
    //     cy.wait(1000)
    //     cy.hash().should('include','#/settings')
    //     cy.wait(1000)
    //     cy.get('input[placeholder="Username"]').should('have.text','Adiii')
    //     cy.get('input[placeholder="Email"]').should('have.text','adoo@xx.com')
    // })
})