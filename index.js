const express = require('express');
const app = express();

const subject = require('./routes/subject');

app.listen(3000, () => console.log('Server up at port 3000'));

app.use(express.json());

app.use('/', subject);

