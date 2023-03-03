
// File : books.js
// Name : Premkumar Patel
// Student ID : 301298810
// Date : 02 March 2023


let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Price: String,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
