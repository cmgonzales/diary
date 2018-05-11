const  moongoose = require('mongoose')
const schema = mongoose.Schema;

//Create Schema
const userSchema = new schema({
    username: {type: String, unique: true},
    password: {type: String,},
    firstname: String,
    lastname: String

});



var User = mongoose.model('myuser', userSchema);
 model.exports = User;

