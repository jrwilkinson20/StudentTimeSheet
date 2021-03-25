var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//const DaysEnum = {"monday":1}
var Record = new Schema ({
	Type: {
		Type: String,
		required: Boolean,
		unique: Boolean
	},
	Minutes: {
		Type: String,
		required: Boolean,
		unique: Boolean
	}
});
var recordSchema = mongoose.model("Record", recordSchema);
module.exports = recordSchema;
