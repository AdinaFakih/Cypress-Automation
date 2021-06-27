/// <reference types="cypress"/>

describe('MyTestSuite',function()
{
    before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('FixturesDemoTest',function(){
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get("input[name=Email]").clear().type(this.data.email) //Email
        cy.get("input[name=Password]").clear().type(this.data.password) //Password
        cy.get("button[type=submit]").click() //SignIn
    })
})