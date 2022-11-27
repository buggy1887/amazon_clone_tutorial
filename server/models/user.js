const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
	name: {
		requierd: true,
		type: String,
		trim: true,
	},
	email: {
		requierd: true,
		type: String,
		trim: true,
		//validate email using RegEx
		validate: {
			validator: (value) => {
				const re =
					/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
				return value.match(re)
			},
			message: 'Plese enter a valid e-mail adress',
		},
	},
	password: {
		requierd: true,
		type: String,
	},
	adress: {
		type: String,
		default: '',
	},
	type: {
		type: String,
		default: 'user',
	},
	//cart
})

const User = mongoose.model('User', userSchema)
module.exports = User
