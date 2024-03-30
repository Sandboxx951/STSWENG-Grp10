const signup = require('../scripts/helpers/signupUser.js');

describe('Sign up function testing', () => {
    it('Successfully signs a user up', async () => {
        const userName = 'John Doe';
        const userEmail = 'johndoe123@gmail.com';
        const userPassword = 'johndoe123';

        const result = await signup.submitData(userName, userEmail, userPassword);

        expect(result).toBe(true);
    }),

    it('Unsuccessfully signs an already existing user up', async () => {
        const userName = 'John Doe';
        const userEmail = 'johndoe123@gmail.com';
        const userPassword = 'johndoe123';

        const result = await signup.submitData(userName, userEmail, userPassword);

        expect(result).toBe(false);
    }),

    it('Successfully signs a user up', async () => {
        const userName = 'Jane Doe';
        const userEmail = 'janedoe123@gmail.com';
        const userPassword = 'janedoe123';

        const result = await signup.submitData(userName, userEmail, userPassword);

        expect(result).toBe(true);
    })
})