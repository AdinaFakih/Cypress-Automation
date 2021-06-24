/// <reference types="cypress"/>

describe('Test Suite Alert',function()
{
    it('Alerts',function(){
        cy.wait(5000)  
        cy.visit("http://demo.automationtesting.in/Alerts.html")
        cy.get("#OKTab > .btn").click()
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('I am an alert box!')
        })
    })
})