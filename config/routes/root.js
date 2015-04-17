/**
 * Created by chen4_000 on 1/31/2015.
 */
var express = require('express');

/*var userRoutes = App.route('userRoutes');*/
var feedRoutes = App.route('feedRoutes');

function rootRoutes (app) {
    var rootRouter = express.Router();

    /*rootRouter.route('/Sign_In').get(userRoutes.SignIn);*/
    rootRouter.route('/GetFeeds').get(feedRoutes.GetFeeds);
    rootRouter.route('/newFeed').post(feedRoutes.NewFeed);
    rootRouter.route('/GetFeed').post(feedRoutes.GetFeed);


    app.use('/',rootRouter);

}

module.exports = rootRoutes;