const assert = require('assert');
const calculateNumber = require('./1-calcul');

// Test for type SUM
describe('calculateNumber with type="SUM"', () => {
    it('Test adding whole numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('Test adding whole number and above 0.5 float', ()=> {
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('Test adding under 0.5 float and above 0.5 float', () => {
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('Test adding number above 0.5 foat', () => {
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('Test adding number two negative number', () => {
        assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
    });

    it('Test adding number above 0.5 which is negative', () => {
        assert.strictEqual(calculateNumber('SUM', 1, -3.7), -3);
    });
})

// Test for type SUBSTRACT
describe('calculateNumber with type="SUBSTRACT"', ()=> {
 it('Test substracting whole numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), 2);
    });

    it('Test substracting whole number and above 0.5 float', ()=> {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), 3);
    });

    it('Test substracting under 0.5 float and above 0.5 float', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), 3);
    });

    it('Test substracting number above 0.5 foat', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), 2);
    });

    it('Test substracting number two negative number', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), -2);
    });

    it('Test substracting number above 0.5 which is negative', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, -3.7), -5);
    });
})

// Test for type DIVIDE
describe('calculateNumber with type="DIVIDE"', () => {
    it('Test zero denuminator', () => {
        try {
            calculateNumber('DIVIDE', 1, 0.2);
        } catch (err) {
            assert(err instanceof TypeError);
            assert.notStrictEqual(err.message, 'Error');
        };
    });

    it('Test DIVIDEing whole numbers', () => {
           assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });
   
    it('Test DIVIDEing whole number and above 0.5 float', ()=> {
        assert.strictEqual(calculateNumber('DIVIDE', 6, 1.7), 3);
    });
   
    it('Test DIVIDEing under 0.5 float and above 0.5 float', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 6.2, 1.7), 3);
    });
   
    it('Test DIVIDEing number above 0.5 foat', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 7.6, 1.7), 4);
    });
   
    it('Test DIVIDEing number two negative number', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -4, -2), 2);
    });
   
    it('Test DIVIDEing number above 0.5 which is negative', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4, -3.7), -1);
    });
})

describe('tyepe should be SUM, SUBTRACT, or Divide', () => {
    it('Invalid type', () => {
        assert.strictEqual(calculateNumber('Mila', 2, 3), 'Type should be SUM, SUBSTRACT or DIVIDE')
    });
});
