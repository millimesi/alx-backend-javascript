const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Index page', () => {
    it('Test the status code', () => {
        request.get('http://localhost:7865', (error, response, body) =>{
            expect(response.statusCode).to.be.equal(200);
        });
    });

    it('Test body', () => {
        request.get('http://localhost:7865', (error, response, body) =>{
            expect(body).to.be.equal('Welcome to the payment system');
        });
    });

    it('Test content type', () => {
        request.get('http://localhost:7865', (error, response, body) =>{
            const contentType = response.headers['content-type'];
            expect(contentType).to.be.equal('text/plain; charset=utf-8');
        });
    });

})
