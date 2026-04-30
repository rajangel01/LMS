const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookType:String,
    bookName:String,
    quantity:Number,
    pages:Number,
    auther:String,
    sem:String,
    price:Number
});

module.exports = mongoose.model("books",bookSchema);