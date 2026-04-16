var mongoose = require("mongoose");

var countrySchema = new mongoose.Schema({
	country_name: String,
	region: String,
	country_food: String,
	GDP: Number,
	population: Number,
	visited: Boolean
});

countrySchema.statics.listAllcountries = function() {
	return this.find({});
};

var countryModel = mongoose.model('country', countrySchema);

module.exports = countryModel;


