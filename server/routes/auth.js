const express = require('express')
const bcryptjs = require('bcryptjs')
const User = require('../models/user')

const authRouter = express.Router()

authRouter.post('/api/signup', async (req, res) => {
	//get data from client
	try {
		const { name, email, password } = req.body
		const existingUser = await User.findOne({ email })
		if (existingUser) {
			return res
				.status(400)
				.json({ msg: 'user with same email already exists!' })
		}

		const hashedPassword = await bcryptjs.hash(password, 8)

		let user = new User({
			email,
			password: hashedPassword,
			name,
		})
		user = await user.save()
		res.json(user)
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
	//post in db
	//return data to user
})

module.exports = authRouter
