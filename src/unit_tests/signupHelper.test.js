const signupValidation = require('../scripts/helpers/signupValidation.js');

describe('Name validation function', () => {

    it('can mark names as invalid', () => {
        const invalidName = 'J0hn Do3';
        const result = signupValidation.validateName(invalidName);

        expect(result).toBe(false);
    })

    it('can mark names as valid', () => {
        const validName = 'John Doe';
        const result = signupValidation.validateName(validName);

        expect(result).toBe(true);
    })

    it('can mark names as valid', () => {
        const validName = 'Shai Gilgeous-Alexander';
        const result = signupValidation.validateName(validName);

        expect(result).toBe(true);
    })
})

describe('Email validation function', () => {
    it('can mark emails as invalid', () => {
        const invalidEmail = 'miguiboygmail.com@';
        const result = signupValidation.validateEmail(invalidEmail);

        expect(result).toBe(false);
    })

    it('can mark emails as invalid', () => {
        const invalidEmail = 'bdawgboygmail@.com';
        const result = signupValidation.validateEmail(invalidEmail);

        expect(result).toBe(false);
    })

    it('can mark emails as valid', () => {
        const validEmail = 'bdawg2@gmail.com';
        const result = signupValidation.validateEmail(validEmail);

        expect(result).toBe(true);
    })
})

describe('Password validation function', () => {
    it('can mark passwords as invalid', () => {
        const invalidPassword = 'abc123';
        const result = signupValidation.validatePassword(invalidPassword);

        expect(result).toBe(false);
    })

    it('can mark passwords as invalid', () => {
        const invalidPassword = '';
        const result = signupValidation.validatePassword(invalidPassword);

        expect(result).toBe(false);
    })

    it('can mark passwords as valid', () => {
        const validPassword = 'reflections';
        const result = signupValidation.validatePassword(validPassword);

        expect(result).toBe(true);
    })
})

describe('Password matching function', () => {
    const password = 'blackmailbox';
    const passwordOther = 'bluemailbox';

    it('can see if passwords do not match', () => {
        const result = signupValidation.matchPassword(password, passwordOther);

        expect(result).toBe(false);
    })

    it('can see if passwords do not match', () => {
        const result = signupValidation.matchPassword(passwordOther, password);

        expect(result).toBe(false);
    })

    it('can see if passwords do match', () => {
        const result = signupValidation.matchPassword(password, password);

        expect(result).toBe(true);
    })
})