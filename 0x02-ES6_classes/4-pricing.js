import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw new Error('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new Error('Currency must be an instance of  Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof (amount) !== 'number') {
      throw new Error('Amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new Error('Currency must be an instance of  Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
