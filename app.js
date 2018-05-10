const express = require('express');
const mongoose = require('mongoose');
var path = require('path');

const app = express();

//Map global promose - get rid of warning
mongoose.Promise = global.Promise;


//Connecing to mongoose
mongoose.connect('mongodb://localhost/diary-dev', {
useMongoClient: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const port = 4000;

//Adding a public static folder for hs and css
app.use(express.static(path.join(__dirname, 'main')));

app.listen(port, () => {
    console.log('Server started  ' + port);
});


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/main/login.html'));
  });

