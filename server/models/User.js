const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    token:{
        type:String,
    },
    itemsInCart:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
        },
    ],
    active: {
        type: Boolean,
        default: true,
    },
    approved: {
        type: Boolean,
        default: true,
    },
});


module.exports = mongoose.model("User", userSchema);

