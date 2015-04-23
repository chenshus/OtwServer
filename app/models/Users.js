/**
 * Created by chen4_000 on 2/15/2015.
 */
var mongoose = require('mongoose');

var  Users =  new mongoose.Schema({
    items :[{type :mongoose.Schema.Types.String, ref:'User'}]
});


var Users = mongoose.model('Users', Users) ;
module.exports = Users;


