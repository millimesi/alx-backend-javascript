const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('Test adding whole numbers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('Test adding whole number and above 0.5 float', ()=> {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('Test adding under 0.5 float and above 0.5 float', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('Test adding number above 0.5 foat', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('Test adding number two negative number', () => {
        assert.strictEqual(calculateNumber(-1, -3), -4);
    });

    it('Test adding number above 0.5 which is negative', () => {
        assert.strictEqual(calculateNumber(1, -3.7), -3);
    });
})
