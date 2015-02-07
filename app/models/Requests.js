/**
 * Created by chen4_000 on 2/5/2015.
 */
var mongoose = require('mongoose');

var  Requests =  new mongoose.schema({
    items :[{type :mongoose.Schema.Types.ObjectId, ref:'Request'}]
});


var Requests = mongoose.model('Requests', Requests) ;
module.exports = Requests;