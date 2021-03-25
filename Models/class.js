var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//const lesson = require("../Models/lesson");

var classSchema = new Schema({
Name: {
	Type: String,
	//required: true,
	Unique: false
},
Lesson: {
	Type: String,
	//required: true,
	Unique: false
},
Class_code: {
	Type: String,
	//required: true,
	Unique: true
}

});
var classSchema = mongoose.model("Class", classSchema);
module.exports = classSchema;