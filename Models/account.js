//Timothy Carta, Victoria Gorski, Julia Wilkinson
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const classes = require("../Models/class");

 var accountSchema = new Schema({
	username: {
		type: String,
		required: Boolean,
		unique: Boolean
	},
	email: {
		type: String,
		required: Boolean,
		unique: Boolean
	},
	password: {
		type: String,
		required: Boolean,
		unique: Boolean
	},
	account_type: {
		type: String,
		required: Boolean,
		unique: Boolean,
		enum: ['Professor', 'Student'], 
		default: 'Student'
	},
	class: {
		type: [{type: Schema.ObjectId, ref: 'classes'}],
		required: Boolean,
		unique: Boolean
	}
});
var accountSchema = mongoose.model("accounts", accountSchema);
module.exports = accountSchema;