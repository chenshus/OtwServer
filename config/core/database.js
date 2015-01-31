/**
 * Created by chen4_000 on 1/31/2015.
 */
var mongoose = require ('mongoose');

function connect (connectionString){
    mongoose.connect(connectionString);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console,'conection error'));
    db.once ('open',function callback ()
    {
        console.log('Mongoose connected at', connectionString)
    })
}

module.exports = connect;

