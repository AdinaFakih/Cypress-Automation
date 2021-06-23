/// <reference types="cypress"/>
describe('Locating Elements',function()
{
    it('Verify types of locators',function()
        {
        cy.visit("https://demo.nopcommerce.com/") //Open website in Chrome browser
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") //find element and send keys
        cy.get("[type='submit']").click() //click the button
        cy.get(".product-box-add-to-cart-button").click()
        cy.wait(5000)
        cy.get("#product_enteredQuantity_4").clear().type('2') //Quantity
        cy.get("#add-to-cart-button-4").click() //add to cart after quantity
        cy.wait(5000)
        cy.get(".cart-label").click()// goto shopping cart  CSS LOCATOR #topcartlink > a > span.cart-label
        cy.wait(5000)
        cy.get(".product-unit-price").contains("$1,800.00") //validation point
    })
})