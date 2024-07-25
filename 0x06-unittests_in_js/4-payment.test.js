const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');



// Test for if Utils.calculatenumber is called 
describe('sendPaymentRequestToApi', () => {
    it('Test for if Utils.calculatenumber is called with SUM, 100, 20', () => {
        const stub = sinon.stub(Utils, 'calculateNumber');
        stub.withArgs('SUM', 100, 20).returns(10);
        expect(Utils.calculateNumber('SUM', 100, 20)).to.be.equal(10);

        const spy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledWith('The total is: 10')).to.be.true;
        stub.restore();
        spy.restore();
    });
});
