/**
 * Created by chen4_000 on 1/31/2015.
 */

require('./config/application');

var server =App.start();

global.io=server;

require('./app/socket/feedHandler');



io.on('connection', function (socket) {
    console.log("ssss");
    io.emit('something', "haaaaa");
    io.emit('chen', "v");
    io.on("helo",function (data){
        console.log(data+"ff");
    })

});
io.on("helo",function (data){
    console.log(data+"ff");
});

