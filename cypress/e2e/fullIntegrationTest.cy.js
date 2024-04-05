import { slowCypressDown } from 'cypress-slow-down';

slowCypressDown(400);

import Chance from 'chance'
chance = new Chance()


describe('Integration test, full End to End', () => {
    const name = chance.name();
    const email = chance.email();
    const password = 'validPasswordTestingLMAO';

    // Sign up for an account
    it('Should let user sign up for an account', () => {
        // visit home page and click on 'login' in navbar
        cy.visit('/') 
        cy.get('#login-navigation').click()

        // Assert Url
        cy.url().should('include', 'login')

        // Click on 'sign up'
        cy.get('a[href=\'/signup\']').click()

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

    // Login to account
    it('Lets user log in using their account then view their courses', () => {
        // visit home page and click on 'login' in navbar
        cy.visit('/') 
        cy.get('#login-navigation').click()

        // Assert Url
        cy.url().should('include', 'login')

        // Answer login form
        cy.get('input[placeholder=\'Email\'').type(email)
        cy.get('input[placeholder=\'Password\']').type(password)
        cy.get('#submit-signup').click()

        cy.url().should('include', '/')

        cy.get('#course-navigation').click()
        cy.get('a[href=\'/RECourses\']').click()

        // View profile
        cy.get('a[href=\'/profile\']').click()

        // Log out
        cy.get('button[type=\'submit\']').should('contain', 'Logout').click()
    })
})