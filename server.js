/**
 * Created by chen4_000 on 1/31/2015.
 */

require('./config/application');

var server =App.start();

require('./app/socket/feedHandler')(server);
