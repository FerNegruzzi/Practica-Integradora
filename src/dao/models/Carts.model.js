const mongoose = require('mongoose')

const collectionName = 'cart'

const collectionSchema = new mongoose.Schema({
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        required: true
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    total:{
        type: Number,
        required: true
    }
})

const Carts = mongoose.model(collectionName, collectionSchema)

module.exports = Carts