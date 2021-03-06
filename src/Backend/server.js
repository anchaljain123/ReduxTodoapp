const express = require('express');
const webpack = require('webpack');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackFile = require('../../webpack.config');
const constantFile = require('./constants');
const configFile = require('./configuration/app');
const app = express();
const PORT = process.env.PORT || constantFile.PORT;
const compiler = webpack(webpackFile);


app.use(morgan("dev"));
app.use(bodyParser());
app.use(cors({origin:true,credentials:true}));
app.use(webpackMiddleware(compiler,{
    hot:true,
    historyApiFallback:true,
}));
app.use('/favicon.ico', express.static(path.resolve(__dirname, '../Frontend/assets/img/favicon.ico')));
app.use('/files', express.static('files'));
configFile.appStarted(app);
app.use('/*', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../../index.html'))
});





/* Starting the server */
app.listen(PORT, console.log("Running on port >>>>>>>>>>>>>>>" + PORT));

//var PORT = process.env.npm_package_config_port;