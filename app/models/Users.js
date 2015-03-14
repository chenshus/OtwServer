/**
 * Created by chen4_000 on 2/15/2015.
 */
var mongoose = require('mongoose');

var  Users =  new mongoose.schema({
    items :[{type :mongoose.Schema.Types.ObjectId, ref:'User'}]
});


var Users = mongoose.model('User', Users) ;
module.exports = Users;