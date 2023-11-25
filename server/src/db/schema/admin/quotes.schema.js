const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({
    date: String,
    text: String,
    image: String,
    auther: String,
})

module.exports = quotesSchema;