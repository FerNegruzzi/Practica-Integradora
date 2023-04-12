const fs = require('fs')
class ProductsManager {
    constructor() { }

    async loadItems() {
        if (fs.existsSync(process.cwd() + '/src/files/Products.json')) {
            const data = await fs.promises.readFile(
                process.cwd() + '/src/files/Products.json'
            )
            const newProduct = JSON.parse(data)
            console.log('desde la clase');
            return newProduct
        }
        return 'El archivo no exsiste'
        // const products = Products.find()
        // return products
    }

    async saveItems() {
        if (fs.existsSync(process.cwd() + '/src/files/Products.json')) {
            const products = fs.promises.readFile(process.cwd() + '/src/files/Products.json')
            const newProduct = JSON.parse(products)
            await fs.promises.writeFile('/src/files/Products.json', newProduct)
            console.log('desde la clase');
            return newProduct
        }
        return 'El archivo no exsiste'
    }
}

module.exports = ProductsManager