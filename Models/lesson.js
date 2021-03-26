//Timothy Carta, Victoria Gorski, Julia Wilkinson
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const record = require("../Models/record");

var lessonSchema = new Schema({
	name: {
		type: String,
		required: Boolean,
		unique: Boolean
},

record: {
	type: [{type: Schema.ObjectId, ref: 'records'}],
	required: Boolean,
	unique: Boolean
},

due_date: {
	type: Date,
	required: Boolean,
	unique: Boolean
}
});
var lessonSchema = mongoose.model("lessons", lessonSchema);
module.exports = lessonSchema;