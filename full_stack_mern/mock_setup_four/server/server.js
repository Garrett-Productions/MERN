const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;

app.use(express.json());   // allows for json objects and handles POST routing
app.use(express.urlencoded({ extended: true })); // allows for JSON objects containing strings and arrays

require('./config/mongoose.config');  // gives connection to our DB and connects our routes

app.use(cors())
require('./routes/mock.routes')(app); 

app.listen(port, () => console.log(`Listening on port: ${port}`) );