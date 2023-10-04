const mongoose = require('mongoose');

const Store_products = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Name is required"],
        minLength: [3, 'Name must be 3 characters or longer']
    },
    number: {
        type: Number,
        required: [true, "Must be greater than 0"],
        unique: true
    },
    open: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
module.exports = mongoose.model('Store_products', Store_products);