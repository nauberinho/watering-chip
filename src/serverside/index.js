
// ----- Load dependencies ----- //
var express = require('express');
var mongoose = require('mongoose');

// ----- Init app ----- //
var app = express();

//---------SOCKET.IO---------------//
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);
// ----- Make use of access-control-allow-origin to prevent CORS-error ----- //
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//  ----- Init database connection -----//
mongoose.connect('mongodb://localhost/rentalCars', {useMongoClient:true});
var db = mongoose.connection;

// ----- Make app use body query parser ----- //
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({ type: 'application/json'});
app.use(jsonParser);

// ----- Load user model ----- //
var Users = require('./models/user.js')
// ----- Load car model ----- //
var Cars = require('./models/car.js');



// ----------------------- //
// ----- Auth Routes ----- //
// ----------------------- //


// ------Create user account------ //
app.post('/api/cars/createaccount', function(req, res) {
    var user = req.body;
    console.log('trying to add user: ' + user)
    Users.createUser(user, function(err, success) {
        console.log("added user: " + success)
        // If successful, return json success, else throw error;
        success ? res.json(success) : (err) => {throw err};
    });
});

// ----- Sign in by username----- //
app.post('/api/signin', function(req, res) {
    var userObject = req.body;
    console.log(userObject)
    console.log("  = userObject")
    let bool = true;
    console.log('signed in: ');
    console.log(userObject);
    Users.signIn(userObject.username, bool, {}, function (err, user) {
        // If signed in, send json user, else throw error;
        user ? res.json(user) : (err) => {throw err};
    })
});

// ----- Sign out by username ----- //
app.post('/api/signout', function(req, res) {
    var userObject = req.body;
    let bool = false;
    Users.signOut(userObject.username, bool, {}, function (err, user) {
        // If signed out, send json user, else throw error;
        user ? res.json(user) : (err) => {throw err};
    })
});

// ---------------------- //
// ----- Car Routes ----- //
// ---------------------- //

// ----- Get avaliable cars ----- //
app.get('/api/cars', function(req, res) {
    Cars.getCars(function(err, success) {
        // If successful, return json data, else throw error;
        success ? res.json(success) : (err) => {throw err};
    });
});


// ----- Filter avaliable cars ----- //
app.post('/api/cars/filter', function(req, res) {
    var conditions = req.body.conditions;
    Cars.filterCars(conditions, function (err, user) {
        // If successful, return json data, else throw error;
        user ? res.json(user) : (err) => {throw err};
    })
});

// ----- Add new car ----- //
app.post('/api/cars/add', function(req, res) {
    var car = req.body;
    Cars.addCar(car, function(err, success) {
        console.log("Added car: " + success)
        // If successful, return json data, else throw error;
        success ? res.json(success) : (err) => {throw err};
    });
});

// ----- Remove car by id ----- //
app.post('/api/cars/remove', function(req, res) {
    var _id = req.query.id;
    console.log('Removing car with id: ... ' + _id)
    Cars.getCarById(_id, function(err, success) {
        if(success) {
            Cars.removeCar(_id, function(err, completed) {
                // If successful, console log, else throw error;
                success ? console.log('Removed car!') : (err) => {throw err};
            });
        }
    })
})

// ----- Book a car by id ----- //
app.post('/api/cars/book', function(req, res) {
    var _id = req.body.id;
    Cars.bookCar(_id, {},{}, function(err, car) {
        // If successful, console log, else throw error;
        car ? console.log('Booked car! : ' + car) : (err) => {throw err}
    })
})

// ----- Unbook a car by id ----- //
app.post('/api/cars/unbook', function(req, res) {
    var _id = req.body.id;
    Cars.unBookCar(_id, {}, {}, function(err, car) {
        // If successful, console log, else throw error;
        car ? console.log('Unbooked car! : ' + car) : (err) => {throw err}
    })
})

// ----- Update a car by id ----- //
app.post('/api/cars/update', function(req, res) {
    var _id = req.query.id;
    var car = req.body;
    Cars.updateCar(_id, car, {}, function(err, success) {
        // If successful, console log success, else throw error;
        success ? console.log('Updated: ' + success) : (err) => {throw err}
    })
})

// ----- Start server ----- //
app.listen(7000);
console.log('Listening on port 7000...');