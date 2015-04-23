/**
 * Created by chen4_000 on 2/7/2015.
 */

var Feed = App.model('Feed');


exports = module.exports=function(io){
    io.on('connection', function(socket){
        socket.on('PostNewFeed',function (post){
            var newFeed = CreateFeedModel(post);
            socket.broadcast.emit('newFeed', newFeed);

        });

    });
};


function CreateFeedModel(FeedData){
 var newFeed = Feed({
     UserId :FeedData.UserId,
     Description :FeedData.Description,
     Feed_Time :FeedData.Date
 });
    newFeed.save(function (err){
        console.log(err);
    });
    return newFeed;


}

/*
function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

function createGuid() {
    guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    return guid;
}*/
