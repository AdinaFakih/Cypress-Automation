// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => { 
    cy.visit("https://admin-demo.nopcommerce.com/login") //Website
    cy.location('protocol').should('eq','https:')
    cy.get("input[name=Email]").clear().type(email) //Email
    cy.get("input[name=Password]").clear().type(password) //Password
    cy.get("button[type=submit]").click() //SignIn
})

Cypress.Commands.add('Conduit_SignUp', (username, email, password) => {
    cy.visit("https://react-redux.realworld.io/#/register?_k=ucbrpf") //Direct link to sing up Website
    cy.title().should('eq', 'Conduit') //verify title
    cy.location('protocol').should('eq','https:')
    cy.get("input[type=text]").clear().type(username) //User name 
    cy.get("input[type=email]").clear().type(email) //Email
    cy.get("input[type=password]").clear().type(password) //password
    cy.get(".btn").contains('Sign in').should('be.visible').click() //SignIn
})

Cypress.Commands.add('Conduit_SignIn', (email, password) => {
    cy.wait(2000)
    cy.visit("https://react-redux.realworld.io/#/login?_k=kuud5i") //Website
    cy.title().should('eq', 'Conduit') //verify title
    cy.get("input[type=email]").clear().type(email) //Email
    cy.get("input[type=password]").clear().type(password) //Password
    cy.wait(2000)
    cy.get("button[type=submit]").should('be.visible').click()//SignIn get(.btn).contains('Sign in')
})