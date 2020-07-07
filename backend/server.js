const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000'}));  
app.use('/employees', employeeController);

app.listen(3000, () => console.log(`Server started at port : 3000`));


