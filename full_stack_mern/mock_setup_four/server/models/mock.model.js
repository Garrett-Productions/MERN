const mongoose = require('mongoose');

const MockSchema = new mongoose.Schema({
    title: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('MockSchema', MockSchema);