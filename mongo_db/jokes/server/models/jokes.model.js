const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema(
    {
        setup: String,
        punchline: String,
    },
    { timestamps: true} // second arguement used to create timestamps
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;