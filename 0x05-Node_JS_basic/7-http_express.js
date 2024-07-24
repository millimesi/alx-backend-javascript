const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
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
      const totalStuden = fieldValues.reduce((acc, fieldStudents) => acc + fieldStudents.length, 0);

      let result = `Number of students: ${totalStuden}\n`;
      for (const [field, students] of Object.entries(studentsByField)) {
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  try {
    const result = await countStudents(process.argv[2]);
    res.end(result);
  } catch (err) {
    res.end(err.message);
  }
});

app.listen(1245, () => {
  console.log('server is running on port 1245');
});

module.exports = app;
