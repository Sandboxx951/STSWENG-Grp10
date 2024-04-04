import { slowCypressDown } from 'cypress-slow-down';

slowCypressDown(400);

import Chance from 'chance';
const chance = new Chance();

describe('Signup Functionality', () => {
    const name = 'John Doe';
    const email = chance.email();
    const password = 'validPassword123';
    
    it('Lets the user sign up', () => {
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
    })

    it('does not let the user sign up if there are empty fields', () => {
        // visit home page and click on 'login' in navbar
        cy.visit('/') 
        cy.get('#login-navigation').click()

        // Assert Url
        cy.url().should('include', 'login')

        // Click on 'sign up'
        cy.get('a[href=\'signup.html\']').click()

        cy.url().should('include', 'signup')

        // Fill up signup form
        cy.get('#terms-agree').click()
        cy.get('#email-agree').click()

        // Click signup
        cy.get('#submit-signup').click()

        cy.url().should('include', 'signup')
    })
})