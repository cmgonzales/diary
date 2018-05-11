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

// // Load User Model
//require('./models/User');
 //const User = mongoose.model('User');

//authentication
// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/main/login.html'));
//   });

//   router.post('/login', function(req, res){
//     var username = req=body.username;
//     var password = req.body.password;

//     User.findOne({username: username, password: password}, function(err,user){
//         if(err){
//             console.log(err);
//             return res.status(500).send();
//         }
//         if(!user){
//             return res.status(404).send();
//         }
//         return res.status(200).send();
//     })
//   })

// router.post('/register', function(req, res){
//     var username = req=body.username;
//     var password = req.body.password;
//     var firstname = req.body.firstname;
//     var lastname = req.body.lastname;

//     var newuser = new username();
//     newuser.username = username;
//     newuser.password = password;
//     newuser.firstname =firstname;
//     newuser.lastname = lastname;
//     newuser.save(function(err, saveUser){
//         if(err){
//             console.log(err);
//             return res.status(500).send();
//         }
//         return res.status(200).send();
//     })
// })

