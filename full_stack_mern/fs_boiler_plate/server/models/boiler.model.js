const mongoose = require('mongoose');
const BoilerSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Boiler', BoilerSchema);