var Restaurants = require('../controllers/restaurants.js');
var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

module.exports = function(app) {
    //Get all restaurant
    app.get('/restaurant', function(request, response) {
        console.log('Get all restaurants is hit in route.js');
        Restaurants.all(request, response)
    })
    //Create a restaurant
    app.post('/restaurant', function(request, response) {
        console.log('Creating restaurant @route.js hit');
        Restaurants.create(request, response)
    })
    //Update restaurant with review
    app.put('/restaurant/edit/:id', function(request, response) {
        console.log('Update product at route hit');
        Restaurants.addReview(request, response)
    })
    // Find a restaurant
    app.get('/restaurant/:id', function(request, response) {
        Restaurants.getOne(request, response)
    })
    // Delete a restaurant
    app.delete('/restaurant/:id', function(request, response) {
        console.log('Delete restaurant @route.js hit');
        Restaurants.delete(request, response)
    })
    // Update a restaurant
    app.patch('/restaurant/:id', function(request, response) {
        console.log('Update restaurant @route.js hit');
        Restaurants.update(request, response)
    })
}