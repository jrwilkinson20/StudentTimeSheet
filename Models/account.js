//Timothy Carta, Victoria Gorski, Julia Wilkinson
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
	username: {
		type: String,
		required: Boolean,
		unique: Boolean,
	},
	email: {
		type: String,
		required: Boolean,
		unique: Boolean,
	},
	password: {
		type: String,
		required: Boolean,
		unique: Boolean,
	},
	account_type: {
		type: String,
		required: Boolean,
		unique: Boolean,
		enum: ['Professor', 'Student'],
		default: 'Student',
	},
	class: [classSchema],
});

var classSchema = new Schema({
	name: {
		type: String,
		required: Boolean,
		unique: Boolean,
	},
	lesson: {
		type: [lessonSchema],
		required: Boolean,
		unique: Boolean,
	},
	class_code: {
		type: String,
		required: Boolean,
		unique: Boolean,
	},
});

var lessonSchema = new Schema({
	name: {
		type: String,
		required: Boolean,
		unique: Boolean,
	},

	record: {
		type: [recordSchema],
		required: Boolean,
		unique: Boolean,
	},

	due_date: {
		type: Date,
		required: Boolean,
		unique: Boolean,
	},
});

var recordSchema = new Schema({
	type: {
		type: String,
		required: Boolean,
		unique: Boolean,
		enum: ['Homework', 'Exam Prep', 'Studying'],
		default: 'Homework',
	},
	minutes: {
		type: Number,
		required: Boolean,
		unique: Boolean,
	},
});

var accountSchema = mongoose.model('accounts', accountSchema);
module.exports = accountSchema;
