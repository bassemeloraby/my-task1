const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors');
const connectDB = require('./config/db');
const cors = require('cors')

connectDB();
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/tasks', require('./routes/taskRaoutes'));


const port = process.env.PORT || '5000'



app.listen(port, err => {
	if (err)
		throw err
	console.log('Server listening on port', port)
})