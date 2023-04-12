const mongoose = require('mongoose')

const collectionName = 'chat'

const messagesSchema = new mongoose.Schema({
   sender: {
    type: String,
    required: true
   },
   message: {
    type: String,
    required: true
   },
   time: {
    type: Date,
    default: Date.now
   }
})
const Chats = mongoose.model(collectionName, messagesSchema)

module.exports = Chats