var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var lessonSchema = new Schema({
	name: {
		type: String,
		required: Boolean,
		unique: Boolean
},

record: {
	type: String,
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