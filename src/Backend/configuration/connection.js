const mongoose = require('mongoose');
const constants = require('../constants');
const db = mongoose.connection;
mongoose.connect(constants.mongodbURI);

db.on('open',(err,data)=>{
    if(err) console.log(err);
    console.log("Connected to Database");
});

db.on('error',(err,data)=>{
    if(err) console.log(err);
    console.log("Could not connect to Database");
});
