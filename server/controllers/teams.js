var mongoose = require("mongoose");
var Team = mongoose.model("Team");
var User = mongoose.model("User");
var Player = mongoose.model("Player");
var fetch = require('node-fetch');

module.exports = {
    addTeam: function(request, response) {
        User.findOne({_id: request.session.userId}, function(err, foundUser) {
            if (err) {
                response.json(err);
            } else {
                var newTeam = new Team(request.body);
                newTeam._user = foundUser._id;
                foundUser.teams.push(newTeam);
                newTeam.save(function(err, savedTeam) {
                    if (err) {
                        response.json(err);
                    } else {
                        foundUser.save(function(err) {
                            if (err) {
                                response.json(err);
                            } else {
                                fetch("http://api.sportradar.us/nba/trial/v4/en/league/hierarchy.json?api_key=9zdg687da5jth395xawqragk")
                                .then(function(res) {
                                    return res.json();
                                }).then(function(data) {
                                    for (let conference of data.conferences) {
                                        for (let division of conference.divisions) {
                                            for (let team of division.teams) {
                                                if (savedTeam.name.includes(team.name)) {
                                                    response.json({team: team});
                                                }
                                            }
                                        }
                                    }
                                }).catch(function(err) {
                                    console.log(err);
                                });
                            }
                        })
                    }
                })
            }
        })
    },
    fetchTeams: function(request, response) {
        User.findOne({_id: request.session.userId}).populate("teams").exec(function(err, foundUser) {
            if (err) {
                response.json(err);
            } else {
                response.json({message: "Sending user's teams", user: foundUser});
            };
        });
    },
    deleteTeam: function(request, response) {
        console.log("deleteTeam hit");
        User.findOne({_id: request.session.userId}, function(err, foundUser) {
            if (err) {
                response.json(err);
            } else {
                console.log("User found!");
                for (let teamId of foundUser.teams) {
                    if (teamId == request.params.id) {
                        console.log("teamId match found!");
                        var index = foundUser.teams.indexOf(teamId);
                        foundUser.teams.splice(index, 1);
                        foundUser.save(function(err) {
                            if (err) {
                                response.json(err);
                                console.log("Something wrong updating user after removing a team id");
                            } else {
                                Player.deleteMany({_team: teamId}, function(err) {
                                    if (err) {
                                        response.json(err);
                                    } else {
                                        Team.remove({_id: teamId}, function(err) {
                                            if (err) {
                                                response.json(err);
                                            } else {
                                                response.json({message: "Team deleted!"})
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    } else {
                        response.json({errors: {error: {message: "Selected team to be deleted not found in user's teams"}}});
                    }
                }
            }
        })
    }
}