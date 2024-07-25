const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');



// Test for if Utils.calculatenumber is called 
describe('sendPaymentRequestToApi', () => {
    it('Test for if Utils.calculatenumber is called with SUM, 100, 20', () => {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    });
});
