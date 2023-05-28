const User = require('../models/User'); //Import User
const bcrypt = require('bcrypt')
const saltRounds = 10;
const {generateAccessToken, decodedAccessToken} = require('../helpers/jwt')
module.exports = {
    register: async (req, res) => {
        const { name, email, password } = req.body;
        bcrypt.hash(password, saltRounds, async function (err, hash) {
            const user = await User.create({ name, email, password: hash });
            res.json(user)
        });

    },
    login: async (req, res) => {
        const { email, password } = req.body;
        //Validate
        const user = await User.findOne({ email: email }).exec();

        if (!user) {
            return res.status(401).json({ code: 401, message: "Login Failed" })
        }
        const {password: hash} = user;
        bcrypt.compare(password, hash, function(err, result) {
            if (!result) {
                return res.status(401).json({ code: 401, message: "Login Failed" })
            }
            
            const accessToken = generateAccessToken({
                name: user.name,
                email: user.email
            })
            return res.json({status: result, accessToken: accessToken})
        })
    },
    profile: async (req,res) => {
        const bearerToken = req.get("Authorization")
        console.log(bearerToken)
        if(bearerToken) {
            const accessToken = bearerToken.replace("Bearer", "").trim();
            const decoded = decodedAccessToken(accessToken)

            const {email} = decoded.data;
            const user = await User.findOne({email}).exec()
            res.json(user)
        }
        
    }
}