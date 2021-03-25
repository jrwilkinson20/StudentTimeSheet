var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const lesson = require("../Models/lesson");

var classSchema = new Schema({
name: {
	type: String,
	required: Boolean,
	unique: Boolean
},
lesson: {
	type: [{type: Schema.ObjectId, ref: 'lessons'}],
	required: Boolean,
	unique: Boolean
},
class_code: {
	type: String,
	required: Boolean,
	unique: Boolean
}

});
var classSchema = mongoose.model("classes", classSchema);
module.exports = classSchema;