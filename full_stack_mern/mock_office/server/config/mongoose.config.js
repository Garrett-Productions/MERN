const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1.27017/office",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("Success when connecting to the DB, yay!"))
.catch(err => console.log("something went wrong", err));