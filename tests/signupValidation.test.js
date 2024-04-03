const signupValidation = require('../src/pages/signup/helpers/signupValidation');

test('checks if a valid username is marked as valid', () => {
    const validName = 'Stephen A. Smith';

    expect(signupValidation.validateName(validName)).toBe(true);
})