const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Name is required"],
        minLength: [2, 'Name must be 2 characters or longer']
    },
    preferredPosition: {
        type: String,
    },
    gameOne: {
        type: String,
        enum: ["Undecided", "Playing", "Not Playing"],
        // default: gameOne.enum[0]
        default: "Undecided"
    },
    gameTwo: {
        type: String,
        enum: ["Undecided", "Playing", "Not Playing"],
        // default: gameTwo.enum[0]
        default: "Undecided"
    },
    gameThree: {
        type: String,
        enum: ["Undecided", "Playing", "Not Playing"],
        // default: gameThree.enum[0]
        default: "Undecided"
    }
}, { timestamps: true });

module.exports = mongoose.model('Player', PlayerSchema);