/**
 * Created by chen4_000 on 2/7/2015.
 */

var Feed = App.model('Feed');


exports = module.exports=function(io){
    io.on('connection', function(socket){
        socket.on('PostNewFeed',function (post){
            CreateFeedModel(post);
            socket.broadcast.emit('newFeed', post);

        });

    });
};


function CreateFeedModel(FeedData){
 var newFeed = Feed({
     UserId :FeedData.UserId,
     Feed_Data :FeedData.description,
     Feed_Time :FeedData.Date
 });
    newFeed.save(function (err){
        console.log(err);
    });


}

