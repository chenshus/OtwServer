/**
 * Created by chen4_000 on 2/7/2015.
 */

var Feed = App.model('Feed');
var Feeds = App.model('Feeds');

exports = module.exports=function(io){
    io.on('connection', function(socket){
        socket.on('PostNewFeed',function (post){

            socket.broadcast.emit('newFeed', post);

        });

    });
};


function CreateFeedModel(FeedData){

}

