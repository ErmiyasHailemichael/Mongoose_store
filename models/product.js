const mongoose = require('mongoose')
const itemsSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String,required: true},
    img: { type: String, },
    price: { type: Number, required: true},
    qty: { type: Number, required: true},
})

const Product = mongoose.model('Product', itemsSchema)

module.exports = Product