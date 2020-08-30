const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
var cors = require('cors');
var csvWriter = require('csv-write-stream');
var writer = csvWriter({ sendHeaders: false });

const app = express();
app.use(cors());
app.use(express.json());

var students = []

fs.createReadStream('db.csv')
  .pipe(csv())
  .on('data', (row) => {
    students.push(row)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    console.log("DATABASE:");
    console.log(students);
  });
console.log('Database:');
console.log(students);
const port = process.env.PORT || 3000 //taking port from environment variable PORT (previously set by the user) and if PORT variable is not present then the default port value will be 3000

//ROUTE TO DISPLAY ALL COURSES
app.get('/students', (req, res) => {
  res.send(students);
});

//ROUTE TO FETCH COURSE DATA BY COURSE ID
app.post('/student/search', (req, res) => {
  let studid = students.find((c) => parseInt(c.StudentId) === parseInt(req.body.id));
  if (!studid)
    res.status(404).send(`Student with id=${req.body.id} could not be found!`);
  console.log(studid);
  if (studid)
    res.send(studid);
});
//ROUTE TO ADD A COURSE TO CSV FILE

app.post('/students', (req, res) => {
  writer = csvWriter({ sendHeaders: false });
  writer.pipe(fs.createWriteStream('db.csv', { flags: 'a' }));
  writer.write({
    header1: req.body.id,
    header2: req.body.name,
    header3: req.body.gender,
    header4: req.body.dob,
    header5: req.body.city,
    header6: req.body.state,
    header7: req.body.email,
    header8: req.body.qual,
    header9: req.body.stream

  });
  writer.end();

  student = {
    StudentId: req.body.id,
    Name: req.body.name,
    Gender: req.body.gender,
    DateOfBirth: req.body.dob,
    City: req.body.city,
    State: req.body.state,
    EmailId: req.body.email,
    Qualification: req.body.qual,
    Stream: req.body.stream
  }
  students.push(student);
  console.log('Database successfully updated!- Query Add');


});
app.listen(port, () => { console.log(`Listening on port ${port}`) });
