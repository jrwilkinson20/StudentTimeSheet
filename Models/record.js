var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var recordSchema = new Schema ({
	type: {
		type: String,
		required: Boolean,
		unique: Boolean,
		enum: ['Homework', 'Exam Prep', 'Studying'],
		default: 'Homework'
	},
	minutes: {
		type: Number,
		required: Boolean,
		unique: Boolean
	}
});
var recordSchema = mongoose.model("records", recordSchema);
module.exports = recordSchema;
