const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('Landing page based on HTML title', () => {
    it('should render the home page when the title is "Home"', async () => {
      

        const res = await request(app).get('/');    
        expect(res.status).to.equal(200); // 200 is the status code for a successful request
        expect(res.text).to.include('<title>Home</title>'); // Check if the HTML title is "Home"
    });

});
