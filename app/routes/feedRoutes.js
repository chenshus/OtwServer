/**
 * Created by chen4_000 on 2/6/2015.
 */

var Feed = App.model('Feed');
var Feeds = App.model('Feeds');


function GetFeeds (req,res){
Feeds.find({},function(err,docs){
    res.send(docs);
})
}

function NewFeed(req,res){
    console.log('fdsf');
    res.send('200');
}

function GetFeed(req,res){
    Feed.find({_id:req._id})
}

exports.GetFeeds = GetFeeds;
exports.NewFeed = NewFeed;
exports.GetFeed = GetFeed;