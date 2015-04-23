/**
 * Created by chen4_000 on 1/31/2015.
 */
var mongoose = require('mongoose');



var User = new mongoose.Schema({
    Email:{type : String,required:true},
    Username:{type : String,required :true},
    Password :{type :String ,required :false}
});


var UserModel = mongoose.model('User', User) ;



module.exports = UserModel;
