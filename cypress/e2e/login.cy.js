import Chance from 'chance';
const chance = new Chance();

describe('User login functionality', () => {
    const name = chance.name();
    const email = chance.email();
    const password = 'abw;diwudaawzZZ21!!!';

    it('Lets the user sign up, then log in', () => {

        // visit home page and click on 'login' in navbar
        cy.visit('/') 
        cy.get('#login-navigation').click()

        // Assert Url
        cy.url().should('include', 'login')

        // Click on 'sign up'
        cy.get('a[href=\'signup.html\']').click()

        cy.url().should('include', 'signup')

        // Fill up signup form
        cy.get('input[placeholder=\'Name\']').type(name)
        cy.get('input[placeholder=\'Email\']').type(email)
        cy.get('input[placeholder=\'Password\']').type(password)
        cy.get('input[placeholder=\'Confirm Password\']').type(password)
        cy.get('#terms-agree').click()
        cy.get('#email-agree').click()

        // Click signup
        cy.get('#submit-signup').click()

        cy.url().should('include', 'login')

        // Answer login form
        cy.get('input[placeholder=\'Email\'').type(email)
        cy.get('input[placeholder=\'Password\']').type(password)
        cy.get('#submit-signup').click()

        cy.url().should('include', 'UserHome')
    })

    it('User tries to log in but does not have an account', () => {

        // visit home page and click on 'login' in navbar
        cy.visit('/') 
        cy.get('#login-navigation').click()

        // Assert Url
        cy.url().should('include', 'login')

        // Answer login form
        cy.get('#submit-signup').click()

        cy.url().should('include', 'login')
    })

    it('User logs in but enters the wrong password', () => {

        // visit home page and click on 'login' in navbar
        cy.visit('/') 
        cy.get('#login-navigation').click()

        // Assert Url
        cy.url().should('include', 'login')

        // Answer login form
        cy.get('input[placeholder=\'Email\'').type(email)
        cy.get('input[placeholder=\'Password\']').type('wrongpassword')
        cy.get('#submit-signup').click()

        cy.url().should('include', 'login')
    })
})