/// <reference types="cypress" />
describe('MyTestSuite', function() 
{
    it('Table Test', function()
    {
    cy.visit("http://testautomationpractice.blogspot.com/")
    //1)Check value presence anywhere in the table
    cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')
    //2)Check value presence in specific row and columnn
       //cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')
    cy.xpath("//*[@id='HTML1']/div[1]/table/tbody/tr[2]/td[1]").contains('Selenium').should('be.visible')
    cy.wait(5000)
    //Verify the book name "Master In Java" whose Author is Amod
    cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e,index,$list) => {
        const text=$e.text() 
        if(text.includes('Amod')){
            cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname){
            const bookName= bname.text()
            expect(bookName).to.equal("Master In Java")
        })
        }
    })
   })
})