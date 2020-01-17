const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://alexdjonata:0ri0n_c0sm0s@cluster0-dtuqq.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set('useCreateIndex', true);

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3330)