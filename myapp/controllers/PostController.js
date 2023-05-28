//Query vs params
const Post = require('../models/Post.js')

module.exports = {
    index: async (req, res) => {
        
        const posts = await Post.find();
      
        res.json( posts )

    },
    get: async (req, res) => {
        const { id } = req.params;
        console.log(id)
        // const product = products.find((product) => product.id === parseInt(id))

        // res.json(product)

        const post = await Post.findById(id).exec();
        res.json(post)
    },
    post: async (req, res) => {
        //lay body cua http method
        const { title, content} = req.body;
//create method from mongoose
//Validate de tranh TH du lieu dua vao bi undefine
        const response = await Post.create({
            title, content
        })
        res.json(response)

    }
}
//Controller -> Action (Method Object)
//Req1 : loc san pham theo id
//Req2: loc san pham theo ten