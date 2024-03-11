const mongoose = require('mongoose');

const mongoURL = process.env.ATLAS_DB || "mongodb://127.0.0.1:27017/Myntra";

exports.main =async ()=>{
    await mongoose.connect(mongoURL);
}
