const mongoose = require('mongoose');

const orderAndReturnSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    status:{
        type:String,
        enum:['Paid','Delivered','Shipped','Placed','Return','Exchange'],
    }
})

module.exports = mongoose.model("OrderAndReturn", orderAndReturnSchema);