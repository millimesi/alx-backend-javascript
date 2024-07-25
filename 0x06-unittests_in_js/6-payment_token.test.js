const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token')



// Test for if Utils.calculatenumber is called 
describe('getPaymentTokenFromAPI', () => {
    it('Test if sucess is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.deep.equal({data: 'Successful response from the API' });
            done();
        }).catch(done);
    });
});
