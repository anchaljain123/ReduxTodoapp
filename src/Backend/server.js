const express = require('express');
const webpack = require('webpack');
const cors = require('cors');
import morgan from 'morgan';
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackFile = require('../../webpack.config');
const constantFile = require('./constants');
const configFile = require('./configuration/app');
const app = express();
const PORT = constantFile.PORT;
const compiler = webpack(webpackFile);
app.use(morgan("dev"));
app.use(bodyParser());
app.use(cors({origin:true,credentials:true}));
app.use(webpackMiddleware(compiler,{
    hot:true,
    historyApiFallback:true,
}));

configFile.appStarted(app);

app.use('/*', (req,res) => {
    res.sendFile('/home/ttn/Desktop/ReduxTodoapp/index.html')
});
app.listen(PORT, console.log("Running on port >>>>>>" + PORT));

//var PORT = process.env.npm_package_config_port;