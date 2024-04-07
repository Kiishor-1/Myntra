const mongoose = require('mongoose');
require('dotenv').config();

exports.connect =  async()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(console.log("DB connection success"))
    .catch((err)=>{
        console.log(err);
    })
}