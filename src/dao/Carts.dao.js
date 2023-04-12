const Carts = require("./models/Carts.model");
const Products = require("./models/Products.model");

class CartsDao {
    constructor(){}

    async findAll(){
        try {
            return await Carts.find()
        } catch (error) {
            return error
        }
    }

    async findOne(){
        try {
            return await Carts.findOne()
        } catch (error) {
            return error
        }
    }

    async findById(id){
        try {
            return await Carts.findById(id)
        } catch (error) {
            return error
        }
    }

    async addProduct(cid, pid){
        console.log('ola');
        try {
            const cart = await Carts.findById(cid)
            const product = await Products.findById(pid)
            console.log(cart, product);
            console.log(cart.products);
            const prodIndex = cart.products.findIndex(prod => `${prod.productId}` === `${pid}`)
            if(prodIndex >= 0) {
                cart.products[prodIndex].quantity++
            }else{
                const newProduct = {
                    productId: product._id,
                    quantity: 1
                }
                cart.products.push(newProduct)
            }
            return await Carts.findByIdAndUpdate(cid, cart, {returnDocument: 'after'})
        } catch (error) {
            return error
        }
    }

    async save(){
        try {
            return await Carts.save()
        } catch (error) {
            return error
        }
    }

    async create(newProduct){
        try {
            return await Carts.create(newProduct)
        } catch (error) {
            return error
        }
    }

    async deleteAll(){
        return await Carts.deleteMany()
    }


}

module.exports = CartsDao