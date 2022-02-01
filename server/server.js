const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const category = require('./routes/category')
const article = require('./routes/articles')
const categoryList = require('./routes/categoryList')

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())




dotenv.config()
const PORT = process.env.Port || 5000;

app.get('/', (req, res) => {
    res.send('hello world');
})


//Routes
app.use('/api/category', category)
app.use('/api/article', article)
app.use('/api/categorys', categoryList)




mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('mogooseDB connected')
)

app.listen(PORT, ()=> console.log(`server running on ${PORT}`))