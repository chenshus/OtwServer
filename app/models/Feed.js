/**
 * Created by chen4_000 on 2/6/2015.
 */
var mongoose = require('mongoose');

var Feed = new mongoose.Schema({
    UserId :String,
    Description :String,
    Feed_Time :Date
});

var Feed = mongoose.model('Feed', Feed) ;

module.exports = Feed;