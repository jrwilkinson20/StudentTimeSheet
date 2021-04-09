/*
Authors: Victoria Gorski, Timothy Carta, Julia Wilkinson
Student Time Sheet Spring 2021
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const lesson = require('../Models/lesson');

var classSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	lesson: {
		type: [{ type: Schema.Types.ObjectId, ref: 'lessons' }],
		required: true,
	},
	class_code: {
		type: String,
		required: true,
		unique: true,
	},
});
var classSchema = mongoose.model('classes', classSchema);
module.exports = classSchema;
