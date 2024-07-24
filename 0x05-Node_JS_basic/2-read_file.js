const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    lines.shift();

    const studentsByField = {};

    for (const line of lines) {
      const parts = line.split(',');

      if (parts.length === 4) {
        const firstname = parts[0];
        const field = parts[3];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        studentsByField[field].push(firstname);
      }
    }

    const fieldValues = Object.values(studentsByField);
    const totalStudents = fieldValues.reduce((acc, fieldStudents) => acc + fieldStudents.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
