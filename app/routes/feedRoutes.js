/**
 * Created by chen4_000 on 2/6/2015.
 */

var Feed = App.model('Feed');
var Feeds = App.model('Feeds');


function GetFeeds (req,res){

}

function NewFeed(req,res){
    console.log('fdsf');
    res.send('200');
}

exports.GetFeeds = GetFeeds;
exports.NewFeed = NewFeed;