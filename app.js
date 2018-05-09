const express = require('express');
var path = require('path');

const app = express();

const port = 4000;

//Adding a public static folder for hs and css
app.use(express.static(path.join(__dirname, 'main')));

app.listen(port, () => {
    console.log('Server started  ' + port);
});


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/main/login.html'));
  });

