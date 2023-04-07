const { Router } = require('express')
const Products = require('../dao/models/Products.model')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const products = await Products.find()
        console.log(products);
        res.json({ products: products })
    } catch (error) {
        res.status(400).json({ status: 'error', error })
    }
})

router.post('/', async (req, res) => {
    try {
        const { title, description, code, price, image } = req.body
        const newProductInfo = {
            title,
            description,
            code,
            price,
            image
        }
        const newProduct = await Products.create(newProductInfo)
        res.json({ message: newProduct })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'esta producto ya esta registrado' })
        }
        console.log(error);
        res.status(500).json({ error: 'internal server error' })
    }
})


module.exports = router