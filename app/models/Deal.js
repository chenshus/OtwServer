/**
 * Created by chen4_000 on 2/6/2015.
 */

var mongoose = require('mongoose');
var Deal = new mongoose.schema({
    SideA :String,
    SideB :String,
    Deal_Description :String,
    Deal_Status :String,
    Amount : Double,
    HasRead : Boolean
});

var Deal = mongoose.model('Deal', Deal) ;
module.exports = Deal;