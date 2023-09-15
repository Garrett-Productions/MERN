const express = require('express');
const app = express();
const cors = require('cors') 
const port = 8000;

app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 

require('./config/mongoose.config'); 
app.use(cors())  
require('./routes/pet_shelter.routes')(app);  


app.listen(port, ()=> console.log(`listening at port: ${port}`));