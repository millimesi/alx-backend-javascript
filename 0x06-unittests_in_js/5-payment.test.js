const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');



// Test for if Utils.calculatenumber is called 
describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(()=> {
        spy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        spy.restore();
    });

    it(' Verify logging the string The total is: 120', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledWith('The total is: 120')).to.be.true;
    });

    it(' Verify logging the string The total is: 20', () => {
        sendPaymentRequestToApi(10, 10);
        expect(spy.calledWith('The total is: 20')).to.be.true;
    });
});
