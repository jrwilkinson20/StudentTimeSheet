var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//const lesson = require("../Models/lesson");

var classSchema = new Schema({
Name: {
	Type: String,
	required: Boolean,
	unique: Boolean
},
Lesson: {
	Type: String,
	required: Boolean,
	unique: Boolean
},
Class_code: {
	Type: String,
	required: Boolean,
	unique: Boolean
}

});
var classSchema = mongoose.model("Class", classSchema);
module.exports = classSchema;