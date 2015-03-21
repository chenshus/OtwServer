/**
 * Created by chen4_000 on 1/31/2015.
 */
/**
 * Created by chen4_000 on 1/31/2015.
 */
var   env         = process.env.NODE_ENV || 'development'
    , packageJson = require('../package.json')
    , path        = require('path')
    , express     = require('express')
    ,cookieParser = require('cookie-parser')
    ,io           = require('socket.io');

console.log('Loading App in ' + env + ' mode.');

global.App = {
    app: express()
    , port: 3000
    , version: packageJson.version
    , root: path.join(__dirname, '..')
    , appPath: function (path) {
        return this.root + '/' + path;
    }
    , require: function (path) {
        return require(this.appPath(path))
    }
    , env: env
    , route: function (path) {
        return this.require("app/routes/" + path);
    }
    ,start : function(){
        var http = require('http').Server(App.app);
        io = io.listen(http);
        var server= http.listen(this.port);
        console.log("Running App Version " + App.version + " on port " + App.port + " in " + App.env + " mode");
        return io;
    }
    , socket : function (path){
        return this.require("app/socket/"+ path);
    }
    , model: function (path) {
        return this.require("app/models/" + path);
    }
};





//middleware
App.app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var bodyParser = require('body-parser');
App.app.use(bodyParser.urlencoded({extended:true}));

var methodOverride = require('method-override');
App.app.use(methodOverride(function (req,res){
    if(req.body && typeof req.body==='object' && '_method' in req.body){
        var method = req.body._method;
        delete req.body._method;
        return method.toLowerCase()
    }
}));


App.require("config/routes/root")(App.app);
App.require('config/core/database')(process.env.DATABASE_URL || 'mongodb://otwadmin:otwadmin@ds041248.mongolab.com:41248/otw_development');




