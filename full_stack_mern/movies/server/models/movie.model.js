const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Title is Required"],
        minLength: [1, 'Title is required']
    },
    name: { 
        type: String,
        required: [true, "Name is Required"],
        minLength: [1, 'Name is required'] 
    },
    // rating: { 
    //     type: Number,
    //     required: [true, "Rating is Required"]
    // },
    reviews: [
        {
        review : { 
            type : String, 
            required: [true, 'Review is Required']
            }
    }
    ]
}, { timestamps: true });
module.exports = mongoose.model('Movie', MovieSchema);