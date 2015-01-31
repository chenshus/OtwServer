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
    ,cookieParser = require('cookie-parser');

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
    , start: function () {
        if (!this.started) {
            this.started = true;
            this.app.listen(this.port);
            console.log("Running App Version " + App.version + " on port " + App.port + " in " + App.env + " mode")
        }
    }
    , route: function (path) {
        return this.require("app/routes/" + path);
    }
    , model: function (path) {
        return this.require("app/models" + path);
    }
};



//middleware
var bodyParser = require('body-parser');
App.app.use(bodyParser.urlencoded({extended:true}));

var methodOverride = require('method-override')
App.app.use(methodOverride(function (req,res){
    if(req.body && typeof req.body==='object' && '_method' in req.body){
        var method = req.body._method
        delete req.body._method
        return method.toLowerCase()
    }
}));


App.require("config/routes/root")(App.app);
App.require('config/core/database')(process.env.DATABASE_URL || 'mongodb://localhost/Otw_'+env);




