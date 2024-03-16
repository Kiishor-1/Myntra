const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    branName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("Brand", brandSchema);