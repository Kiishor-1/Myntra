const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    gender: {
        type: String,
    },
    dateOfBirth: {
        type: String,
    },
    phone: {
        type: String,
        minLength: 8,
        maxLength: 10,
    },
    alternatePhone:{
        type: String,
        minLength: 8,
        maxLength: 10,
    },
    address:[String],
});

module.exports = mongoose.model("Profile", profileSchema);