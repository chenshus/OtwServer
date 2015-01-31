/**
 * Created by chen4_000 on 1/31/2015.
 */
var express = require('express');

function rootRoutes (app) {
    var rootRouter = express.Router();
    app.use('/',rootRouter)
}

module.exports = rootRoutes;