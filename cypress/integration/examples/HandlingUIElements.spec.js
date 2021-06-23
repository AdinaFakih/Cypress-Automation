/// <reference types="cypress"/>

describe('UI Elements',function()
{
    it('Verify Inputbox & Radio buttons',function(){
        cy.wait(3000)
        cy.visit("http://demo.guru99.com/test/newtours/") //visit URL
        cy.wait(3000)
        cy.url().should('include','newtours') //verify URL should include 'newtours'
        //User name
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("adina")
        //Password
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("12345678")
        //Submit
        cy.get('input[name=submit]').should('be.visible').click()
        //using xpath click on find flight
        cy.xpath("/html/body/div[2]/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[2]/td[2]/a").click()
        //Verify title
        cy.title().should('eq','Find a Flight: Mercury Tours:')
        //Radio Buttons
        cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked') //check visibility, check status
        cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click() //check visibility, check status
        cy.get('[name="findFlights"]').should('be.visible').click() //Continue button
        //Verify title
        cy.title().should('eq','Find a Flight: Mercury Tours:') 
    })
})