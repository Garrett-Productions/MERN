const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Player', PlayerSchema);