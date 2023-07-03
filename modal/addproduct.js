const mongoose = require('mongoose');

const  ap = new mongoose.Schema({
    title:{ type : String},
    description: { type : String},
    price: { type : String},
    discountPercentage: { type :String},
    rating: { type :String},
    stock: { type :String},
    brand: { type :String},
    category: { type :String},
    thumbnail: { type :String},
})

const addprodus = mongoose.model('AddProducts', ap)

module.exports = addprodus;