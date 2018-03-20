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
        User.findOne({_id: request.session.userId}).exec()
        .then(function(foundUser) {
            async function deleteTeamAndPlayers(user, teamId) {
                console.log("selected teamId: ", teamId);
                console.log("user.teams: ", user.teams);
                for (let team of user.teams) {
                    console.log("each team: ", team);
                    if (team == teamId) {
                        console.log("Id matched");
                        var index = await user.teams.indexOf(team);
                        await user.teams.splice(index, 1);
                        await user.save();
                        Player.deleteMany({_team: teamId}).exec()
                        .then(function() {
                            Team.remove({_id: teamId}, function(err) {
                                if (err) {
                                    response.json(err);
                                } else {
                                    response.json({message: "Team deleted!"})
                                }
                            })
                        })
                    }
                }
            }
            deleteTeamAndPlayers(foundUser, request.params.id);
        }).catch(function(err) {
            console.log(err);
        });
    }
}