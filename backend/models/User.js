const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        requied: true
    },
    email: {
        type: String,
        requied: true,
        unique: true
    },
    password: {
        type: String,
        requied: true
    },
    date: {
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('User',UserSchema);