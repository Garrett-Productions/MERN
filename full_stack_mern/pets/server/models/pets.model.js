const mongoose = require('mongoose');

const PetsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Name is required"],
        minLength: [3, 'Name must be 3 characters or longer']
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        minLength: [3, 'Type must be 3 characters or longer']
    },
    like: {
        type: Number
    },
    description: {
        type: String,
        required: [true, "Description is Required"],
        minLength: [3, 'Description must be 3 characters or longer']
    },
    skillOne: {
        type: String,
    }, // not required, these skills, only thing we need is type
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    }
}, { timestamps: true });
module.exports = mongoose.model('Pet', PetsSchema);