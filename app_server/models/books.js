var mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	Title: {type: String, required: true, minlength: 3},
	Author: {type: String, required: true},
    bookEdition: {type:String},
    price:{type:Number},
	description: {type: String},
	rating:  {type: String}
});

/*var rating = new mongoose.Schema({
	review_stars: {type: String, required: true},
	number_of_reviews: {type: String, required: true}
	});*/

mongoose.model('Books', bookSchema);