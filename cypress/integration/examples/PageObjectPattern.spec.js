/// <reference types="cypress"/>

import LoginPage from '../PageObects/LoginPage' 

describe('Test Suite',function()
{
    it('Valid Login Test',function(){
        const lp =  new LoginPage()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })
})