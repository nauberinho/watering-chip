'use strict';

// Load mongo module
var mongoose = require('mongoose');


// User object schema

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    signedIn: {
        type: Boolean,
        default: [false]
    },
    type: String
});

var Users = module.exports = mongoose.model('Users', userSchema);

// Sign in and update user object

module.exports.signIn = function(username, bool, options,  callback) {

    Users.findOneAndUpdate({username: username}, { $set: { signedIn: true }}, options, callback);

}

// Sign out and update user object
module.exports.signOut = function(username, bool, options,  callback) {

    Users.findOneAndUpdate({username: username}, { $set: { signedIn: false }}, options, callback);

}

// Add user
module.exports.createUser = function(user, callback) {
    Users.create(user, callback);
}
