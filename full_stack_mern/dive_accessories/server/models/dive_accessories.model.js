const mongoose = require('mongoose');

const DiveAccessorySchema = new mongoose.Schema({
    product: {
        type: String,
        required: [ true, "Name is required"],
        minLength: [3, 'Name must be 3 characters or longer']
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
}, { timestamps: true });
module.exports = mongoose.model('DiveAccessories', DiveAccessorySchema);

