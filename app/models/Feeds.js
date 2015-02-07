/**
 * Created by chen4_000 on 2/5/2015.
 */
var mongoose = require('mongoose');

var  Feeds =  new mongoose.Schema({
    items :[{type :mongoose.Schema.Types.ObjectId, ref:'Feed'}]
});



var Feeds = mongoose.model('Feeds', Feeds) ;
module.exports = Feeds;