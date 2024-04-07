const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    description:{
        type:String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: [
        {
            type: String,
        },
    ],
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand"
    },
    ratingAndReview: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RatingAndReview"
    },
    size:{
        type:String,
        enum:['XS','S','M','L','XL','XXL'],
        required:true,
    }
});

module.exports = mongoose.model("Product", productSchema);