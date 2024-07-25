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

describe('Test /cart/:id', () => {
    it('Test numer id status code', () => {
        request.get('http://localhost:7865/cart/12', (error, response, body) =>{
            expect(response.statusCode).to.be.equal(200);
        });
    });

    it('Test numer id status code', () => {
        request.get('http://localhost:7865/cart/hello', (error, response, body) =>{
            expect(response.statusCode).to.be.equal(404);
        });
    });

    it('Test body', () => {
        request.get('http://localhost:7865/cart/12', (error, response, body) =>{
            expect(body).to.be.equal('Payment methods for cart 12');
        });
    });
})

describe('/available_payments', () => {
    it('available_payments', () => {

        request.get('http://localhost:7865/available_payments', (error, response, body) =>{
            const parsedBody = JSON.parse(body);
            expect(parsedBody).to.deep.equal({
                payment_methods: {
                  credit_cards: true,
                  paypal: false
                }
              });
        });
    });
})

describe('/login', () => {
    it('Test body', (done) => {
        request.post({
            url: 'http://localhost:7865/login',
            json: { userName: 'Betty' } // Send data as JSON
        }, (error, response, body) =>{
            expect(body).to.deep.equal('Welcome Betty');
            done();
        });
    });

})
