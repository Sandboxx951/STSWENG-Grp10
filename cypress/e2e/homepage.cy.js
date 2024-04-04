import { slowCypressDown } from 'cypress-slow-down';

slowCypressDown(400);

describe('Homepage Navigation', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Has the title', () => {
        cy.contains('Team Leader');
    })

    it('Can navigate to About data', () => {
        cy.get('#about-navigation').click();
    })

    it('Can navigate to Courses', () => {
        cy.get('#course-navigation').click();
    })

    it('Can navigate to Testimonies', () => {
        cy.get('#testimonial-navigation').click()
    })
})