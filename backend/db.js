const mongoose = require('mongoose');

const MongoURL = 'mongodb://localhost:27017/inotebookDB';

const connectToMongo = ()=>{
    mongoose.connect(MongoURL, ()=>{
        console.log("Connected to Mongo Sucessfully");
    })
}

module.exports = connectToMongo;