const mongoose = require('mongoose')

const ConnectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.URI)
        console.log('DB connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConnectDB