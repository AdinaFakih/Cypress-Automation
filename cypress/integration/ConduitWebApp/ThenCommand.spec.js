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
        cy.get(":nth-child(3) > .nav-link").should('be.visible').click()
        cy.wait(2000)
        cy.contains("Or click here to logout.").click()
    })
    after(() => {
        cy.log("This is TEAR DOWN block")
    })

    it('Test Create a Post', function () {
        for (let i = 0; i < 2; i++) {
            cy.wait(2000)
            cy.get('ul.navbar-nav').children().contains('New Post').click()
            cy.hash().should('include', '#/editor')
            cy.location('hash').should('include', '#/editor')
            cy.get('form').within(($form) => {
                cy.get('input').first().type('test')
                cy.get('input').eq(1).type('test 1')
                cy.get('textarea').last().type('test 2')
                cy.get('input[placeholder="Enter tags"]').type("yayahay")
                cy.wait(1000)
                cy.contains("Publish Article").should('be.visible').click()
            })    
            cy.url().should('include', 'article')
            }    
    })

    it('Test Favorited Articles ', function () {
        cy.contains('Your Feed', {timeout: 1000}).should('be.visible')
        cy.contains('Global Feed', {timeout: 1000}).should('be.visible')
        cy.wait(1000)
        cy.get(".nav-link").contains("Adiii").click()
        cy.wait(5000)
        cy.contains("My Articles").should('be.visible')
        cy.wait(3000)
        cy.reload()
        cy.get(".ion-heart").first().click()
        cy.contains("Favorited Articles").should('be.visible').click()
        cy.reload()
        cy.url().should('include', 'favorites')
        cy.wait(1000)
        cy.get(".btn-primary").first().then(($fav) => {
            const favCount = $fav.text()
            expect(parseInt(favCount)).to.eq(1)
        }).click()
        cy.reload()
        cy.go(-1)
        cy.contains("No articles are here... yet.").should('be.visible')
    })
})