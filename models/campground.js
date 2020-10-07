var mongoose = require("mongoose");

//SCHEMA FOR CAMPGROUND
var campgroundSchema = new mongoose.Schema({
	name : String,
    image : String,
	price : String,
	description : String,
	author : {
		id : {
			type : mongoose.Schema.Types.ObjectId,
			ref : "User"
		},
		username : String
	},
	comments : [{
		type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
	}]
});

// AN OBJECT MODEL WHICH WE CAN USE
module.exports = mongoose.model("Campground", campgroundSchema);

