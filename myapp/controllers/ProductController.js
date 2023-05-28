//Query vs params
const Product = require('../models/Product.js')

module.exports = {
    // Show list post
    index: async (req, res) => {

        const products = await Product.find();

        res.json(products)

    },
    // Get post by id
    get: async (req, res) => {
        const { id } = req.params;
        const product = await Product.findById(id).exec();
        res.json(product)
    },
    post: async (req, res) => {
        //lay body cua http method
        const { name, price, description } = req.body;

        const response = await Product.create({
            name, price, description,
        })
        res.json(response)

    }
}
//Controller -> Action (Method Object)
//Req1 : loc san pham theo id
//Req2: loc san pham theo ten