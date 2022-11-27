console.log('Hello World')

//Import from packages
const express = require('express')
const mongoose = require('mongoose')
// Import from other files

const authRouter = require('./routes/auth')

//Initilisations

const PORT = 3000
const app = express()
const DB =
	'mongodb+srv://arman:basgitar4strings@cluster0.zvsosqq.mongodb.net/?retryWrites=true&w=majority'

// Middleware
app.use(express.json())
app.use(authRouter)

//Connections
mongoose
	.connect(DB)
	.then(() => {
		console.log('Connection sucessful')
	})
	.catch((e) => {
		console.log(e)
	})

app.listen(PORT, '0.0.0.0', () => {
	console.log(`connected at port ${PORT}`)
})
