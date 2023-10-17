const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [ true, 'Title Required and must be unique'],
        minLength: [2, 'Title must contain at least 2 characters'],
        unique: true
    },
    body: { 
        type: String,
        required: [true, "Content required"],
        maxLength: [255, "Body must contain max of 255 characters"]
    }
}, { timestamps: true });
module.exports = mongoose.model('Note', NoteSchema);