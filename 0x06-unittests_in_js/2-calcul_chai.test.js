const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

// Test for type SUM
describe('calculatenumber', () => {
  describe('calculateNumber with type="SUM"', () => {
    it('Test adding whole numbers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('test adding whole number and above 0.5 float', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('test adding under 0.5 float and above 0.5 float', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('test adding number above 0.5 foat', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('test adding number two negative number', () => {
      expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    });

    it('test adding number above 0.5 which is negative', () => {
      expect(calculateNumber('SUM', 1, -3.7)).to.equal(-3);
    });

    it('test adding number is negative', () => {
      expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
    });
  });

  // Test for type SUBSTRACT
  describe('calculateNumber with type="SUBSTRACT"', () => {
    it('test substracting whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(2);
    });

    it('test substracting whole number and above 0.5 float', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(3);
    });

    it('test substracting under 0.5 float and above 0.5 float', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(3);
    });

    it('test substracting number above 0.5 foat', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(2);
    });

    it('test substracting number two negative number', () => {
      expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(-2);
    });

    it('test substracting number above 0.5 which is negative', () => {
      expect(calculateNumber('SUBTRACT', 1, -3.7)).to.equal(-5);
    });

    it('test substracting number above 0.5 which is negative', () => {
      expect(calculateNumber('SUBTRACT', -1.2, -3.7)).to.equal(-3);
    });
  });

  // Test for type DIVIDE
  describe('calculateNumber with type="DIVIDE"', () => {
    it('test zero denuminator', () => {
      expect(calculateNumber('DIVIDE', 1, 0.2)).to.equal('Error');
    });

    it('test zero oerands', () => {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });

    it('test DIVIDEing whole numbers', () => {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });

    it('test DIVIDEing whole number and above 0.5 float', () => {
      expect(calculateNumber('DIVIDE', 6, 1.7)).to.equal(3);
    });

    it('test DIVIDEing under 0.5 float and above 0.5 float', () => {
      expect(calculateNumber('DIVIDE', 6.2, 1.7)).to.equal(3);
    });

    it('test DIVIDEing number above 0.5 foat', () => {
      expect(calculateNumber('DIVIDE', 7.6, 1.7)).to.equal(4);
    });

    it('test DIVIDEing number two negative number', () => {
      expect(calculateNumber('DIVIDE', -4, -2)).to.equal(2);
    });

    it('test DIVIDEing number above 0.5 which is negative', () => {
      expect(calculateNumber('DIVIDE', 4, -3.7)).to.equal(-1);
    });

    it('should return the result of dividing a positive number by a negative number', () => {
      // Correct: Testing division with mixed signs
      expect(calculateNumber('DIVIDE', 4, -3.7)).to.equal(4 / -4); // Ensure result matches expected rounding
    });
  });
});
