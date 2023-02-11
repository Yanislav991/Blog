const userService = require("../services/UserService")
const JsonWebToken = require('jsonwebtoken')
const SECRET_JWT_CODE = "psmR3Hu0ihHKfqZymo1m"
const Bcrypt = require('bcryptjs')


exports.signUp = async(req, res) => {
    console.log(req.body)
    if (!req.body.email || !req.body.password) {
        res.json({ success: false, error: "Send needed params" })
        return
    }
    userService.signUp(req.body.email, req.body.password).then((user) => {
        console.log(user)
        const token = JsonWebToken.sign({
            id: user._id,
            email: user._email
        }, SECRET_JWT_CODE)
        res.json({ success: true, token: token })
    }).catch((err) => {
        console.log(err)
        res.json({ success: false, error: "Invalid user data. Most likely this email is already registered" })
    })
}

exports.login = async(req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({ success: false, error: "Send needed params" })
        return
    }
    userService.login(req.body.email, req.body.password).then((user) => {
        if (!user) {
            res.json({ success: false, error: "User does not exists" })
        } else {
            if (!Bcrypt.compareSync(req.body.password, user.password)) {
                res.json({ success: false, error: "Wrong password" })
            } else {
                const token = JsonWebToken.sign({
                    id: user._id,
                    email: user._email
                }, SECRET_JWT_CODE)
                res.json({ success: true, token: token })
            }
        }
    })
}