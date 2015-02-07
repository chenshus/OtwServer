/**
 * Created by chen4_000 on 1/31/2015.
 */
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    UserID:{type : String,required:true},
    Username:{type : String,required :true},
    Password :{type :String ,required :false}
});


var UserModel = mongoose.model('User', schema) ;

schema.set('autoIndex',App.env !== 'production')

module.exports = UserModel;
