const { Router } = require('express')
const CartsDao = require('../dao/Carts.dao')

const router = Router()
const Carts = new CartsDao()

router.get('/', async (req, res) => {
    try {
        const carts = await Carts.findAll()
        console.log(carts);
        res.json({ carts: carts })
    } catch (error) {
        res.json({ error })
    }
})

router.post('/', async (req, res) => {
    try {
        const newCart = await Carts.create({})
        console.log(newCart);
        res.json({ message: newCart })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: 'bad request' })
    }
})

router.put('/:cid/:pid', async (req, res) => {
    try {
        const { cid, pid } = req.params
        const carts = await Carts.addProduct(cid, pid)
        res.json({carts})
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: 'bad request' })
    }
})

module.exports = router
        // const { cid, pid } = req.params
        // const cart = await Carts.findById(cid).populate('products.product')
        // const product = await Products.findById(pid)
        // if (!cart) return res.status(404).json({ error: 'Cart not found' })
        // if (!product) return res.status(404).json({ error: 'Product not found' })
        // const productInCart = cart.product.find(p => p.product._id.toString() === pid)
        // if (productInCart) {
        //     productInCart.quantity++
        // } else {
        //     cart.product.push({ product, quantity: 1 })
        // }
        // cart.total += product.price
        // await Carts.save()
        // return res.json(cart)



        // const { title, quantity, price } = req.body
        // const newCartInfo = {
        //     title,
        //     quantity,
        //     price
        // }
        // console.log(newCartInfo);