const mongoose = require('mongoose');

const MockSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, "Name is required"],
        minLength: [3, 'Name must be 3 characters or longer']
    },
}, { timestamps: true });
module.exports = mongoose.model('MockBuild', MockSchema);
