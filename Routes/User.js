const express = require('express')
const { Register, SignIn } = require('../Controllers/User');
const IsAuth = require('../Middelwars/IsAuth');
const { ValidRegister, Validator } = require('../Middelwars/Validator');

const UserRouter = express.Router()

UserRouter.post('/register', ValidRegister, Validator, Register)

UserRouter.post('/signIn', SignIn)

UserRouter.get('/Profile', IsAuth, (req, res) => { res.send(req.user) })


module.exports = UserRouter