const productsController = require('../products/controller.products')
const cartsController = require('../carts/controller.carts')
const messagesController = require('../message/controller.messages')

const router = app => {
    app.use('/products', productsController)
    app.use('/carts', cartsController)
    app.use('/messages', messagesController)
}

module.exports = router