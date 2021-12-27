const mongoose = require('mongoose');

const MongoURL = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

const connectToMongo = ()=>{
    mongoose.connect(MongoURL, ()=>{
        console.log("Connected to Mongo Sucessfully");
    })
}

module.exports = connectToMongo;