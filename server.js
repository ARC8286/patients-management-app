
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

require('dotenv').config();
const db = require('./db')
app.use(bodyparser.json());

const PORT = process.env.PORT || 3000;

const user = require('./routes/user');
app.use('/user',user);

const patient = require('./routes/patient');
app.use('/patient',patient);

const heartrate = require('./routes/heartrate');
app.use('/heartrate',heartrate);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})