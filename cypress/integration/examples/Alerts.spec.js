/// <reference types="cypress"/>

describe('Test Suite Alert',function()
{
    it('Alerts',function(){  
        cy.visit("http://demo.automationtesting.in/Alerts.html")
        cy.get("#OKTab > .btn").click()
    })
})