const User = require('../Model/User')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

exports.Register = async (req, res) => {
    try {
        const { email, password } = req.body
        const found = await User.findOne({ email })
        if (found) {
            return res.status(400).send({ errors: [{ Msg: 'email already used!' }] })
        }
        const newUser = new User(req.body)
        const salt = 10
        const passHash = bcrypt.hashSync(password, salt);
        newUser.password = passHash
        await newUser.save()
        const payload = { id: newUser._id }
        var token = jwt.sign(payload, process.env.privetKey);
        res.status(200).send({ Msg: 'User succefully registred!', newUser, token })
    } catch (error) {
        res.status(500).send({ errors: [{ Msg: 'could not add user!' }] })
    }
}

exports.SignIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const found = await User.findOne({ email })
        if (!found) {
            return res.status(400).send({ errors: [{ Msg: 'bad email or password' }] })
        }
        const pass = bcrypt.compareSync(password, found.password);
        if (!pass) {
            return res.status(400).send({ errors: [{ Msg: 'bad email or password' }] })
        }

        const payload = { id: found._id }
        var token = jwt.sign(payload, process.env.privetKey);
        res.status(200).send({ Msg: 'Logged IN', found, token })
    } catch (error) {
        res.status(500).send({ errors: [{ Msg: 'could not sign In!' }] })
    }
}