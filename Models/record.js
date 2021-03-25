var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//const DaysEnum = {"monday":1}
var recordSchema = new Schema ({
	type: {
		type: String,
		required: Boolean,
		unique: Boolean
	},
	minutes: {
		type: Number,
		required: Boolean,
		unique: Boolean
	}
});
var recordSchema = mongoose.model("records", recordSchema);
module.exports = recordSchema;
