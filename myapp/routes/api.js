var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");
const ProductController = require('../controllers/ProductController')
const PostController = require('../controllers/PostController');
const AuthController = require('../controllers/AuthController');
router.get("/users", UserController.index);

router.get("/users/:id", UserController.get);//HTTP method get

router.get('/products',ProductController.index)

router.get('/products/:id', ProductController.get)

router.post('/products', ProductController.post)//HTTP method post

router.get('/posts', PostController.index)//

router.get('/posts/:id', PostController.get)//

router.post('/posts', PostController.post)

router.post('/register', AuthController.register)

router.post('/login', AuthController.login)

router.get('/profile', AuthController.profile)
module.exports = router;
