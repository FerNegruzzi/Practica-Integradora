const {Router} = require('express')
const Chats = require('../dao/models/Messages.model')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const messages = await Chats.find()
        res.json({ messages: messages })
    } catch (error) {
        res.json({ error })
    }
})

module.exports = router