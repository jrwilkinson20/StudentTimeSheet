var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var lessonSchema = new Schema({
	Name: {
		Type: String,
		//Required: true,
		Unique: false
},

Record: {
	Type: String,
	//Required: true,
	Unique: false
},

Due_date: {
	Type: Date,
	//Required: true,
	Unique: false
}
});
var lessonSchema = mongoose.model("Lesson", lessonSchema);
module.exports = lessonSchema;