var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
    restaurant: { type: String, unique: true,  required: [true, 'Restaurant is required'], minlength: [3, 'restaurant name must be at least 3 characters long']},
    cuisine: { type: String, require: [true, 'Cuisine is required'], minlength: [3, 'cuisine field must be at least 3 characters long']},
    review: [{
        customer: { type: String, minlength: [3, 'Name of customer at least 3 characters long']},
        stars: { type: Number, default: 1, min: [1], max: [5]},
        review: { type: String, minlength: [3, 'Review must be at least 3 characters long']}
    }]
})

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);