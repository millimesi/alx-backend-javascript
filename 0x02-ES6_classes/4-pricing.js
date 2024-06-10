import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        if (typeof(amount) !== 'number') {
            throw new Error('Amount must be a Number');
        }
        if (!(currency instanceof Currency)) {
        throw new Error('currency must be an instance of  Currency');
        }
        this._amount = amount;
        this._currency = currency;
    }
    get amount() {
        return this._amount;
    }  
    set amount(amount) {
        if (typeof(amount) !== 'number') {
            throw new Error('Amount must be a Number');
        }
        this._amount = amount;
    }
    get currency() {
        if (!(currency instanceof Currency)) {
            throw new Error('currency must be an instance of  Currency');
        }
        return this._currency;
    }
    set currency(currency) {
        this._currency = currency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
} 
