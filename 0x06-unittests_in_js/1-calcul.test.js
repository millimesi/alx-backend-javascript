const assert = require('assert');
const calculateNumber = require('./1-calcul');

// Test for type SUM
describe('calculatenumber', () => {
  describe('calculateNumber with type="SUM"', () => {
    it('test adding whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('test adding whole number and above 0.5 float', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('test adding under 0.5 float and above 0.5 float', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('test adding number above 0.5 foat', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('test adding number two negative number', () => {
      assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
    });

    it('test adding number above 0.5 which is negative', () => {
      assert.strictEqual(calculateNumber('SUM', 1, -3.7), -3);
    });

    it('test adding number is negative', () => {
      assert.strictEqual(calculateNumber('SUM', -1.2, -3.7), -5);
    });
  });

  // Test for type SUBSTRACT
  describe('calculateNumber with type="SUBSTRACT"', () => {
    it('test substracting whole numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), 2);
    });

    it('test substracting whole number and above 0.5 float', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), 3);
    });

    it('test substracting under 0.5 float and above 0.5 float', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), 3);
    });

    it('test substracting number above 0.5 foat', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), 2);
    });

    it('test substracting number two negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), -2);
    });

    it('test substracting number above 0.5 which is negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, -3.7), -5);
    });

    it('test substracting number above 0.5 which is negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.2, -3.7), -3);
    });
  });

  // Test for type DIVIDE
  describe('calculateNumber with type="DIVIDE"', () => {
    it('test zero denuminator', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0.2), 'Error');
    });

    it('test zero oerands', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });

    it('test DIVIDEing whole numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('test DIVIDEing whole number and above 0.5 float', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 1.7), 3);
    });

    it('test DIVIDEing under 0.5 float and above 0.5 float', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.2, 1.7), 3);
    });

    it('test DIVIDEing number above 0.5 foat', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.6, 1.7), 4);
    });

    it('test DIVIDEing number two negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4, -2), 2);
    });

    it('test DIVIDEing number above 0.5 which is negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, -3.7), -1);
    });

    it('should return the result of dividing a positive number by a negative number', () => {
      // Correct: Testing division with mixed signs
      assert.strictEqual(calculateNumber('DIVIDE', 4, -3.7), 4 / -4); // Ensure result matches expected rounding
    });
  });
});
