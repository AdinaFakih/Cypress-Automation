/// <reference types="cypress"/>

const { constant } = require("cypress/types/lodash")

describe('Testing Tables',function()
{
    it('Table Test',function()
    {
        cy.wait(300)
        cy.visit('http://testautomationpractice.blogspot.com/')
        
        //Check value presence anywhere in the table
        cy.get('table[name="BookTable"]').contains('td','Learn Selenium').should('be.visible')
        
        //Check value presence in specific row & column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        //Verify the book name "Master In Java" whose author is Amod
        // cy.get('table[name="BookTable"]>tbody>tr td:nth-child(2)').each(($e1,index,$list) => {
        //     const text = $e1.text()
        //     if(text.includes("Amod"))
        //     {
        //         cy.get('table[name="BookTable"]>tbody>tr td:nth-child(1)').eq(index).then(function(bookname)
        //         {
        //             const bookName = bookname.text()
        //             expect(bookname).to.equal("Master In Java")

        //         })
        //     }
        // })
    })
})