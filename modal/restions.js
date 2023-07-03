const mongoose = require('mongoose');

const restions = new mongoose.Schema({
    name: { type : String},
    email: { type : String},
    passwords : { type : String},
})

const regi = mongoose.model('vinit', restions);

module.exports = regi;