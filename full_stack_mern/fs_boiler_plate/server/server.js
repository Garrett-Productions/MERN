const express = require('express');
const app = express();
const port = 8000;


const cors = require('cors')
app.use(cors()) 
require('./routes/boiler.routes')(app);

app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 
require('./config/mongoose.config');   

app.listen(port, () => console.log(`Listening on port: ${port}`) );