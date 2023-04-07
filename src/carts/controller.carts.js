const fs = require('fs')
const { Router } = require('express')
const Carts = require('../dao/models/Carts.model')
const uploader = require('../utils/multer.utils')
const FileManager = require('../dao/FileManager.dao')

const router = Router()
const fileManager = new FileManager()

router.get('/loadItems', async (req, res) => {
    try {
        const carts = await fileManager.loadItems()
        res.json({ message: carts})
    } catch (error) {
        res.json({error})
    }
})

router.get('/', async (req, res) => {
    try {
        const carts = await Carts.find()
        res.json({ carts: carts })
    } catch (error) {
        res.json({ error })
    }
})

router.post('/', uploader.single('file'), async (req, res) => {
    try {
        const { title, author, descriprion, year } = req.body
        const newCartInfo = {
            title,
            author,
            descriprion,
            year,
            image: req.file.filename
        }
        const newCart = await Carts.create(newCartInfo)
        res.json({ message: newCart })
    } catch (error) {

    }
})

module.exports = router