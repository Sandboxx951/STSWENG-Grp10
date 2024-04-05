import { slowCypressDown } from 'cypress-slow-down';

slowCypressDown(400);

describe('Homepage Navigation', () => {

    afterEach(() => {
        cy.get('#home-navigation').click()
    })

    it('Has the title', () => {
        cy.visit('/');
        cy.contains('Team Leader');
    })

    it('Can navigate to About data', () => {
        cy.visit('/');
        cy.get('#about-navigation').click();
    })

    it('Can navigate to Courses', () => {
        cy.visit('/');
        cy.get('#course-navigation').click();
    })

    it('Can navigate to Testimonies', () => {
        cy.visit('/');
        cy.get('#testimonial-navigation').click()
    })
})