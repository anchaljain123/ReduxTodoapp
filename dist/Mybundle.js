'use strict';

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var webpack = require('webpack');
var cors = require('cors');
//const morgan = require('morgan');

var webpackMiddleware = require('webpack-dev-middleware');
var webpackFile = require('../../webpack.config');
var constantFile = require('./constants');
var configFile = require('./configuration/app');
var app = express();
var PORT = constantFile.PORT;
var compiler = webpack(webpackFile);
app.use((0, _morgan2.default)("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(webpackMiddleware(compiler, {
    hot: true,
    historyApiFallback: true
}));
configFile.appStarted(app);
app.use('/*', function (req, res) {
    res.sendFile('/home/ttn/WebstormProjects/advancedTodo/index.html');
});
app.listen(PORT, console.log("Running on port >>>>>>" + PORT));

//var PORT = process.env.npm_package_config_port;
