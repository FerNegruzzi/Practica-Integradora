const { Router } = require('express')
const uploader = require('../utils/multer.utils')
const ProductsManager = require('../dao/FileManager.dao')
const ProductsDao = require('../dao/Products.dao')

const router = Router()
const productManager = new ProductsManager()
const Products = new ProductsDao()

router.get('/loadItems', async (req, res) => {
    try {
        const products = await productManager.loadItems()
        const newProducts = await Products.createMany(products)
        
        res.json({ message: newProducts})
    } catch (error) {
        console.log(error);
        res.json({error})
    }
})

router.get('/', async (req, res) => {
    try {
        const products = await Products.findAll()
        console.log(products);
        res.json({ products: products })
    } catch (error) {
        res.status(400).json({ status: 'error', error })
    }
})

router.post('/',uploader.single('image'), async (req, res) => {
    try {
        const { title, description, code, price, image } = req.body
        const newProductInfo = {
            title,
            description,
            code,
            price,
            image: req.file.filename
        }
        const newProduct = await Products.create(newProductInfo)
        res.json({ message: newProduct })
    } catch (error) {
        if (error.code === 11000) {
            console.log(error);
            return res.status(400).json({ error: 'esta producto ya esta registrado' })
        }
        console.log(error);
        res.status(500).json({ error: 'internal server error' , error})
    }
})

router.delete('/deleteAll', async (req, res)=> {
    await Products.deleteAll()
})


module.exports = router