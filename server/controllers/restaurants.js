var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

module.exports = {
    all: function(request, response) {
        Restaurant.find({}).sort('-_id').exec(function(err, result) {
            if (err) {
                response.json(err);
            } else {
                response.json(result);
            }
        })
    },
    create: function(request, response) {
        console.log(request.body);
        var restaurant = new Restaurant({restaurant: request.body.name , cuisine: request.body.cuisine});
        restaurant.save(function(err, result) {
            if (err) {
                console.log('Unsuccessful creation');
                response.json(err);
            } else {
                console.log('Successful creation');
                Restaurant.find({}, function(err, result) {
                    if (err) {
                        response.json(err);
                    } else {
                        response.json(result);
                    }
                })
            }
        })
    },
    getOne: function(request,response) {
        Restaurant.find({_id: request.params.id}).sort('review.stars').exec(function(err, result) {
            if (err) {
                console.log('Something went wrong');
                response.json(err);
            } else {
                console.log('Found that one restaurant!');
                response.json(result);
            }
        })
    },
    edit: function(request, response) {
        Product.findOneAndUpdate({_id: request.params.id}, {$set: {title: request.body.title, price: request.body.price, image_url: request.body.url}}, { runValidators: true, new: true }, function(err, result) {
            console.log('Edit controllers is hit');
            if (err) {
                response.json(err);
            } else {
                response.json(result);
            }
        })
    },
    addReview: function(request, response) {
        console.log(request.body);
        Restaurant.update({_id: request.params.id}, {$push: {review: request.body}}, {runValidators: true}, function(err, result) {
            if (err) {
                response.json(err);
            } else {
                response.json(result);
            }
        })
    },
    delete: function(request, response) {
        console.log(request.params.id);
        Restaurant.remove({_id: request.params.id}, function(err, result) {
            if (err) {
                response.json(err);
                console.log('Something went wrong deleting this product');
            } else {
                console.log('Deletion successful');
                Restaurant.find({}).sort('-_id').exec(function(err, result) {
                    if (err) {
                        console.log(err) 
                    } else {
                        response.json(result);
                    }
                })
            }
        })
    },
    update: function(request, response) {
        console.log('Updating now....');
        console.log(request.body);
        Restaurant.update({_id: request.params.id}, {$set: {restaurant: request.body.name, cuisine: request.body.cuisine}}, {runValidators: true}, function(err, result) {
            if (err) {
                response.json(err);
            } else {
                response.json(result);
            }
        } )
    }
}