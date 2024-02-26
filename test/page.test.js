const request = require('supertest');
const app = require('../app');


describe('Landing page based on HTML title', () => {
    it('should render the landing page when the title is "Home"', async () => {
        const chai = await import('chai');
        const expect = chai.expect;

        const res = await request(app).get('/');
        expect(res.status).to.equal(200); // 200 is the status code for a successful request
        expect(res.text).to.include('<title>Home</title>'); // Check if the HTML title is "Home"
    });

});
