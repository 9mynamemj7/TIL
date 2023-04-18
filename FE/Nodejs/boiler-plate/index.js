// mongoDB
const myData = require('./personal.json');
const mongoose = require('mongoose');

const myHostNum = myData.mongo.host;
mongoose.connect(myHostNum).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// express
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

