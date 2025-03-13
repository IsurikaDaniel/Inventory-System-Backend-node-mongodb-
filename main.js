const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

//Making connection with mongodb
mongoose.connect('mongodb://localhost:27017/inveSystem', {
    userNewUrlParser: true,
    useUnifiedTopology: true
},(err)=>{
    if(!err){
        console.log('Connected to DB');
    }else{
        console.log('Error Connecting DB');
    }
})

//schema
const userSchema = {
    name: String,
    email: String,
    id: Number
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});