export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be string');
    }
    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof (student) === 'string')) {
      throw new TypeError('Students must be an array of Strings');
    }

    this._name = name;
    this._lenth = length;
    this._students = students;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be number');
    }
    this._lenth = length;
  }

  get length() {
    return this._lenth;
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof (student) === 'string')) {
      throw new TypeError('Students must be an array of Strings');
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
