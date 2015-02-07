/**
 * Created by chen4_000 on 2/5/2015.
 */
var mongoose = require('mongoose');

var  Deals =  new mongoose.schema({
    items :[{type :mongoose.Schema.Types.ObjectId, ref:'Deal'}]
});

var Deals = mongoose.model('Deals', Deals) ;

module.exports = Deals;