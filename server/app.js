const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/database');

db.main().then(()=>{
    console.log("DB connection success");
}).catch(err=>{
    console.log("Error while db connection", err);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, (req, res)=>{
    console.log(`Server is up at port ${PORT}`);
})