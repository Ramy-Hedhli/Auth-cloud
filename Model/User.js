const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String },
    age: Number,
    phone_Number: Number,
    Adress: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model('auth', userSchema)