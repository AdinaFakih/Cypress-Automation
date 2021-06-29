/// <reference types="cypress"/>

describe('Test Conduit', function () {

    Cypress.config('pageLoadTimeout', 100000)

    before(() => {
        cy.log("This is SET UP block")
    })
    beforeEach(() => {
        cy.Conduit_SignIn('adoo@xx.com', '12345678')//valid username email password
    })
    afterEach(() => {
        cy.log("This is LOGOUT block")
        cy.wait(2000)
        // cy.get(":nth-child(3) > .nav-link").should('be.visible').click()
        // cy.wait(2000)
        // cy.contains("Or click here to logout.").should('be.visible').click()
    })
    after(() => {
        cy.log("This is TEAR DOWN block")
    })
    // it('Test Sign In Page ',function(){
    //     cy.wait(1000)
    //     cy.Conduit_SignIn('adoo@xx.com','12345678')//valid username email password
    //     cy.wait(1000)
    //     cy.contains('Your Feed',{timeout:10000}).should('be.visible')
    // })

    it('Test Create a Post', function () {
        for (let i = 0; i < 2; i++) {
            cy.wait(2000)
            cy.contains('New Post').should('be.visible').click()
            //cy.get('ul.navbar-nav').children().contains('New Post').click()
            cy.hash().should('include', '#/editor')
            cy.location('hash').should('include', '#/editor')
            cy.get('form').within(($form) => {
                //cy.get('input').first().type('test')
                cy.get("input[placeholder='Article Title']").type("yayahay")
                //cy.get('input').eq(1).type('test 1')
                cy.get('input[placeholder="What\'s this article about?"]').type("yayahay")
                //cy.get('textarea').last().type('test 2')
                cy.get('textarea[placeholder="Write your article (in markdown)"]').type("yayahay")
                cy.get('input[placeholder="Enter tags"]').type("yayahay")
                cy.wait(1000)
                cy.contains("Publish Article").should('be.visible').click()
            })    
            cy.url().should('include', 'article')
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

    // it('Test Favorited Articles ',function(){
    //     cy.contains('Your Feed',{timeout:1000}).should('be.visible')
    //     cy.contains('Global Feed',{timeout:1000}).should('be.visible').click()
    //     cy.xpath("//*[@id='main']/div/div/div/div/div[2]/div/div/a[18]").should('be.visible').click()

    // })
    it('Test Favorited Articles ', function () {
        cy.contains('Your Feed', {timeout: 1000}).should('be.visible')
        cy.contains('Global Feed', {timeout: 1000}).should('be.visible')
        cy.wait(1000)
        cy.get(".nav-link").contains("Adiii").click()
        cy.wait(3000)
        cy.contains("My Articles").should('be.visible')
        cy.wait(3000)
        cy.get(".ion-heart").first().click()
        cy.contains("Favorited Articles").should('be.visible').click()
        cy.url().should('include', 'favorites')
        cy.wait(3000)
        cy.get(".ion-heart").first().click()
        cy.reload()
        cy.contains("No articles are here... yet.").should('be.visible')
        cy.go('back') //cy.go(-1)
    })
})