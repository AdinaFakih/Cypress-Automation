/// <reference types="cypress"/>

describe('Test Suite Alert',function()
{
    it('Conformation Alerts Ok/Cancel',function(){
        cy.wait(5000)  
        cy.visit("http://demo.automationtesting.in/Alerts.html")
        cy.get(":nth-child(2) > .analystic").click()
        cy.get('#CancelTab > .btn').click() //cypress will handle alerts by itself
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Press a Button !')
        })
    })
})