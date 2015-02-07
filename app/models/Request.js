/**
 * Created by chen4_000 on 2/6/2015.
 */
var mongoose = require('mongoose');

var Request = new mongoose.schema({
    SideA :String,
    SideB :String,
    Request_Description :String,
    Amount : Double,
    HasRead : Boolean
});

var Request = mongoose.model('Request', Request) ;
module.exports = Request;