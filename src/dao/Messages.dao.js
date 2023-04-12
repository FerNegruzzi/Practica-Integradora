const Chats = require("./models/Messages.model");

class ChatsDao {
    constructor(){}

    async create(sender, message){
        try {
            const newMessage = {sender, message}
            const chat = await Chats.create(newMessage)
            console.log(chat);
            return chat
        } catch (error) {
            return error
        }
    }

    async getChats(){
        try {
            return await Chats.find().lean()
        } catch (error) {
            return error
        }
    }
}

module.exports = ChatsDao