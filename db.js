const mongoose = require('mongoose');
require('dotenv').config();
const mongourl = process.env.DB_url;
mongoose.connect(mongourl);
const db = mongoose.connection;

db.on("connected",()=>{
    console.log("database connected");
})

db.on("error",()=>{
    console.log("error in database connection")
})

db.on("disconnected",()=>{
    console.log("database disconnected");
})