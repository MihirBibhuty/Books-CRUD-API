// models/Book.js

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publish_date: String
});

module.exports = mongoose.model('Book', bookSchema);