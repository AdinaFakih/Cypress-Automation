/// <reference types="cypress"/>

describe('Check Boxes & Drop Down',function()
{
    it('Hobbies check boxes',function(){
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['Cricket','Hockey'])
    })

    it('Skills Drop Down',function(){
        cy.get('#Skills').select('Android').should('have.value','Android')
    })

    it('Languages Multi Select Drop Down',function(){
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Turkish').click()
    })

    it('Select Countries Searchable Drop Down',function(){
        cy.get('[role="combobox"]').click({force: true}) //bcoz language dorp down is covering this drop down so we force it 
        cy.get('.select2-search__field').type('Bang')
        cy.get('.select2-search__field').type('{enter}')
    })


})