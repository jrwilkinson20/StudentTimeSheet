/*
Authors: Victoria Gorski, Timothy Carta, Julia Wilkinson
Student Time Sheet Spring 2021
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const record = require('../Models/record');

var lessonSchema = new Schema({
	name: {
		type: String,
		required: true,
	},

	record: {
		type: [{ type: Schema.Types.ObjectId, ref: 'records' }],
		required: true,
	},

	due_date: {
		type: Date,
		required: true,
	},
});
var lessonSchema = mongoose.model('lessons', lessonSchema);
module.exports = lessonSchema;
