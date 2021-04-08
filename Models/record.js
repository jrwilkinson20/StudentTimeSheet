//Timothy Carta, Victoria Gorski, Julia Wilkinson
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var recordSchema = new Schema({
	type: {
		type: String,
		required: true,
		enum: ['Homework', 'Exam Prep', 'Studying'],
		default: 'Homework',
	},
	minutes: {
		type: Number,
		required: true,
	},
});
var recordSchema = mongoose.model('records', recordSchema);
module.exports = recordSchema;
