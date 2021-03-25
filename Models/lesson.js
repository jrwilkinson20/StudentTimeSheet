var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var lessonSchema = new Schema({
	Name: {
		Type: String,
		required: Boolean,
		unique: Boolean
},

Record: {
	Type: String,
	required: Boolean,
	unique: Boolean
},

Due_date: {
	Type: Date,
	required: Boolean,
	unique: Boolean
}
});
var lessonSchema = mongoose.model("Lesson", lessonSchema);
module.exports = lessonSchema;