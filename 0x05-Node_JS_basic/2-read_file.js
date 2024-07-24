const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    // Split the file content by new lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    // console.log(`lines:   ${lines}`);

    // If the file is empty (except header), throw an error
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Remove the header line
    lines.shift();

    // Create a map to store the students by field
    const studentsByField = {};

    // Process each line
    for (const line of lines) {
      const parts = line.split(',');

      // Check if the line has the expected number of parts
      if (parts.length === 4) {
        const firstname = parts[0];
        const field = parts[3];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        studentsByField[field].push(firstname);
        // console.log(`studentsByField: ${studentsByField}`);
      }
    }

    // Log the total number of students
    const fieldValues = Object.values(studentsByField);
    const totalStudents = fieldValues.reduce((acc, fieldStudents) => acc + fieldStudents.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their names
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
