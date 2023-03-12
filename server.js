const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
require('dotenv').config()


connectDB()

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use('/api/travel', require('./routes/travelRoutes'))

const PORT = 5000

app.listen(PORT, console.log(`Server listening on port: ${PORT}`))