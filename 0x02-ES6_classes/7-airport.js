export default class Airport {
  constructor(name, code) {
    if (typeof (name) !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof (code) !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
