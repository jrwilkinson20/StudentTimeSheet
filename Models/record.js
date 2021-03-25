var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//const DaysEnum = {"monday":1}
var Record = new Schema ({
	Type: {
		Type: String,
		//Required: true,
		Unique: false
	},
	Minutes: {
		Type: String,
		//Required: true,
		Unique: false
	}
});
var recordSchema = mongoose.model("Record", recordSchema);
module.exports = recordSchema;
