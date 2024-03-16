const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    token:{
        type:String,
    },
    accountType:{
        type:String,
        enaum:['Customer','Merchant','Admin'],
        required:true,
    },
    itemsInCart:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
        },
    ],
    resetPasswordExpires:{
        type:Date,
    },
    active: {
        type: Boolean,
        default: true,
    },
    approved: {
        type: Boolean,
        default: true,
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Profile",
    },
});


module.exports = mongoose.model("User", userSchema);

