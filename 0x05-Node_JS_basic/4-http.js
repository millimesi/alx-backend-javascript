const { createServer } = require('http');
const url = require('url');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

function csvToObjectList(data) {
  const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

  const headers = lines[0].split(',');
  const rows = lines.slice(1);

  const studentData = [];
  rows.forEach((row) => {
    const studnet = row.split(',');

    const studentObj = {};
    headers.forEach((header, index) => {
      studentObj[header] = studnet[index];
    });

    studentData.push(studentObj);
  });

  return studentData;
}

function fieldDataList(studentData) {
  let fields = studentData.map((object) => object.field);

  fields = [...new Set(fields)];

  const fieldData = [];

  for (const field of fields) {
    const fieldObj = {
      name: field,
      count: 0,
      list: [],
    };

    fieldData.push(fieldObj);
  }

  fieldData.forEach((fieldobject) => {
    studentData.forEach((student) => {
      if (student.field === fieldobject.name) {
        const updateField = { ...fieldobject };

        updateField.count += 1;
        updateField.list.push(student.firstname);
        Object.assign(fieldobject, updateField);
      }
    });
  });
  return fieldData;
}

async function countStudents(path) {
  try {
    // Read the csv file from the file
    const data = await readFile(path, 'utf-8');

    // Create an object of the rows lisr for the data
    const studentData = csvToObjectList(data);

    // prepare another list of object or dic
    // that has field name, student count and List
    const fieldData = fieldDataList(studentData);

    // Display the data according to the given format
    console.log(`Number of students: ${studentData.length}`);
    for (const field of fieldData) {
      console.log(`Number of students in ${field.name}: ${field.count}. List: ${field.list.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  res.end('Hello Holberton School!');
});

app.listen(1245, '127.0.0.1');
