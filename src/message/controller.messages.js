const { Router } = require('express')
const ChatsDao = require('../dao/Messages.dao')

const router = Router()
const Chats = new ChatsDao()

router.get('/', async (req, res) => {
    try {
        const chats = await Chats.getChats()
        console.log(chats);
        res.render('chat.handlebars', { chats })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: 'bad request' })
    }
})

router.post('/', async (req, res) => {
    try {
        const { sender, message } = req.body
        const msj = await Chats.create(sender, message)
        res.json({ messages: msj })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'bad request', error })
    }
})

module.exports = router