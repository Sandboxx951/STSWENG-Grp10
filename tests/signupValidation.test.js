const signupValidation = require('../src/pages/signup/helpers/signupValidation');

describe('Name validation function testing', () => {
    it('Returns false if an invalid name is entered', () => {
        const invalidName = 'Stephen A, Smith';

        expect(signupValidation.validateName(invalidName)).toBe(false);
    })

    it('Returns false if an invalid name is entered', () => {
        const invalidName = 'J3p0y Mendoza';

        expect(signupValidation.validateName(invalidName)).toBe(false);
    })

    it('Returns true if a valid name is entered', () => {
        const validName = 'John Lennon';

        expect(signupValidation.validateName(validName)).toBe(true);
    })

    it('Returns true if a valid name is entered', () => {
        const validName = 'Stephen A. Smith';

        expect(signupValidation.validateName(validName)).toBe(true);
    })

    it('Returns true if a valid name is entered', () => {
        const validName = 'Shaivonte Aician Gilgeous-Alexander';

        expect(signupValidation.validateName(validName)).toBe(true);
    })
})

describe('Email validation function testing', () => {
    it('Returns false if an invalid email is entered', () => {
        const invalidEmail = '@miguiboy gmail.com';

        expect(signupValidation.validateEmail(invalidEmail)).toBe(false);
    })

    it('Returns false if an invalid email is entered', () => {
        const invalidEmail = 'hotstargmail.com';

        expect(signupValidation.validateEmail(invalidEmail)).toBe(false);
    })
    
    it('Returns false if an invalid email is entered', () => {
        const invalidEmail = 'blueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.comblueberrycupcake123blueberrycupcake456_@gmail.com';

        expect(signupValidation.validateEmail(invalidEmail)).toBe(false);
    })

    it('Returns true if a valid email is entered', () => {
        const validEmail = 'hotstar33@gmail.com';

        expect(signupValidation.validateEmail(validEmail)).toBe(true);
    })

    it('Returns true if a valid email is entered', () => {
        const validEmail = 'icecream123_123@dlsu.edu.ph';

        expect(signupValidation.validateEmail(validEmail)).toBe(true);
    })
})

describe('Password validation function testing', () => {
    it('Returns false if an invalid password is entered', () => {
        const invalidPassword = 'chicken'

        expect(signupValidation.validatePassword(invalidPassword)).toBe(false);
    })

    it('Returns false if an invalid password is entered', () => {
        const invalidPassword = 'c4ndy!?'

        expect(signupValidation.validatePassword(invalidPassword)).toBe(false);
    })

    it('Returns true if an valid password is entered', () => {
        const validPassword = 'vanillamilkshake'

        expect(signupValidation.validatePassword(validPassword)).toBe(true);
    })

    it('Returns true if an valid password is entered', () => {
        const validPassword = '_c00kieC4ndy!>@@#123'

        expect(signupValidation.validatePassword(validPassword)).toBe(true);
    })

    it('Returns true if an valid password is entered', () => {
        const validPassword = 'paintblueredblue'

        expect(signupValidation.validatePassword(validPassword)).toBe(true);
    })
})