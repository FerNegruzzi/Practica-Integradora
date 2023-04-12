const Products = require('./models/Products.model')

class ProductsDao {
    constructor() { }

    async findAll() {
        try {
            return await Products.find()
        } catch (error) {
            return error
        }
    }
    
    async findById(id){
        try {
            return await Products.findById(id)
        } catch (error) {
            return error
        }
    }

    async createMany(newProductsInfo) {
        try {
            return await Products.insertMany(newProductsInfo)
        } catch (error) {
            return error
        }
    }

    async create(newProductInfo) {
        try {
            return await Products.create(newProductInfo)
        } catch (error) {
            return error
        }
    }

    async deleteAll() {
        return await Products.deleteMany()
    }

}

module.exports = ProductsDao