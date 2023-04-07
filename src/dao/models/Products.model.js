const mongoose = require('mongoose')

const collectionName = 'product'

const collectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    }
})

const Products = mongoose.model(collectionName, collectionSchema)

module.exports = Products