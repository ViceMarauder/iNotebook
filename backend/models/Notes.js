const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        requied: true
    },
    description: {
        type: String,
        requied: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('Note',NotesSchema);