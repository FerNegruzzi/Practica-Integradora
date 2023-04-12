const mongoose = require('mongoose')

const collectionName = 'cart'

const collectionSchema = new mongoose.Schema({
    products: [{
        productId: mongoose.Schema.Types.ObjectId,
        quantity: Number
    }]
})

const Carts = mongoose.model(collectionName, collectionSchema)

module.exports = Carts