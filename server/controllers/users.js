var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require("bcrypt");

module.exports = {
    register: function(request, response) {
        User.findOne({email: request.body.email}, function(err, foundUser) {
            if (err || foundUser == null) {
                if (request.body.password == request.body.pwConfirm) {
                    var newUser = new User(request.body);
                    newUser.save(function(err) {
                        if (err) {
                            response.json(err);
                        } else {
                            console.log("new user password after reg", newUser.password);
                            request.session.userId = newUser._id;
                            response.json({message: "New user added. Log in now!"});
                        }
                    })
                } else {
                    response.json({errors: {error: {message: "Passwords don't match"}}})
                }
            } else {
                response.json({errors: {error: {message: "Email already exists"}}})
            }
        })
    },
    login: function(request, response) {
        User.findOne({email: request.body.email}, function(err, foundUser) {
            if (err || foundUser == null) {
                response.json({errors: {message: "This email does not exit"}});
            } else {
                console.log(foundUser);
                bcrypt.compare(request.body.password, foundUser.password, function(err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result == true) {
                        request.session.userId = foundUser._id;
                        response.json({message: "Password matched"});
                    } else {
                        response.json({errors: {message: "Wrong password"}});
                    }
                })
            }
        })
    },
    logout: function(request, response) {
        request.session.destroy(function(err) {
            if (err) {
                response.json(err)
            } else {
                response.json({message: "User successfully logged out"})
            }
        })
    }
}