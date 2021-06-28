describe('Sign Up/Sign In Test Suite',function()
{
    it('Test Sign Up Page ',function(){
        
        cy.Conduit_SignUp('ototo','oo@xx.co','12345678')//valid username email password
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')
        cy.wait(3000)
        cy.Conduit_SignUp('Adiii','adoo@xx.com','12345678') //invalid email
        cy.contains('already been taken').should('be.visible')
    })
    it('Test Sign In Page ',function(){
        
        cy.Conduit_SignIn('adoo@xx.com','12345678')//valid username email password
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')
    })
})