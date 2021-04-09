/*
Authors: Victoria Gorski, Timothy Carta, Julia Wilkinson
Student Time Sheet Spring 2021
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var recordSchema = new Schema({
	type: {
		type: String,
		required: true,
		enum: ['HOMEWORK', 'EXAM PREP', 'STUDYING'],
		default: 'HOMEWORK',
	},
	minutes: {
		type: Number,
		required: true,
	},
});
var recordSchema = mongoose.model('records', recordSchema);
module.exports = recordSchema;
