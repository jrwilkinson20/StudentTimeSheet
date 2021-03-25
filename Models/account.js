var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const DaysEnum = {"monday":1}
const classes = require("../Models/class");

 var accountSchema = new Schema({
	Username: {
		Type: String,
		//required: true,
		Unique: true
	},
	Email: {
		Type: String,
		//required: true,
		Unique: true
	},
	password: {
		Type: String,
		//required: true,
		Unique: false
	},
	Account_type: {
		Type: String,
		//required: true,
		Unique: false
	},
	Class: {
		Type: String,
		//required: true,
		Unique: false
	}
});
var accountSchema = mongoose.model("Account", accountSchema);
module.exports = accountSchema;