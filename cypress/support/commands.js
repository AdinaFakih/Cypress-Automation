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
    cy.get("input[name=Email]").clear().type(email) //Email
    cy.get("input[name=Password]").clear().type(password) //Password
    cy.get("button[type=submit]").click() //SignIn
})

Cypress.Commands.add('Conduit_SignUp', (email, password) => {
    cy.visit("https://react-redux.realworld.io/#/login?_k=kuud5i") //Website
    cy.get("") //Email

})

Cypress.Commands.add('Conduit_SignIn', (email, password) => {
    cy.visit("https://react-redux.realworld.io/#/login?_k=kuud5i") //Website
    cy.get("") //Email

})