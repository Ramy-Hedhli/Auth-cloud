const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const UserRouter = require('./Routes/User')

const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())

app.use('/api/auth', UserRouter)

app.listen(process.env.port, console.log(`server running on port ${process.env.port}`))