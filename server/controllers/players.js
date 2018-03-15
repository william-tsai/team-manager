var mongoose = require("mongoose");
var Player = mongoose.model("Player");
var Team = mongoose.model("Team");
var fetch = require('node-fetch');
var async = require("async");
mongoose.Promise = global.Promise;

module.exports = {
    addPlayersToDB: function(request, response) {
        Team.findOne({name: request.body.name}).exec()
        .then(function(foundTeam) {
            function fetchTeam(teamId) {
                fetch(`http://api.sportradar.us/nba/trial/v4/en/teams/${teamId}/profile.json?api_key=9zdg687da5jth395xawqragk`)
                .then(function(resp) {
                    return resp.json();
                }).then(function(data) {
                    var players = data.players;
                    async function savePlayersToDB(playersArray, team) {
                        for (const player of playersArray) {
                            var newPlayer = new Player({
                                name: player.full_name,
                                position: player.primary_position
                            });
                            newPlayer._team = team._id;
                            team.players.push(newPlayer._id);
                            await newPlayer.save();
                            await team.save();
                        }
                        response.json({message: "Players added to team roster"});
                    };
                    savePlayersToDB(players, foundTeam);
                }).catch(function(err) {
                    console.log(err);
                });
            }
            setTimeout(fetchTeam.bind(this, request.params.id), 1000);
        }).catch(function(err) {
            console.log(err);
        });
    },
    fetchPlayers: function(request, response) {
        Team.findOne({_id: request.params.id}).populate("players").exec(function(err, foundTeam) {
            if (err) {
                response.json(err);
            } else {
                response.json({message: "Sending team's players", team: foundTeam});
            };
        });
    },
    updateStatus: function(request, response) {
        Player.update({_id: request.params.id}, request.body, function(err) {
            if (err) {
                response.json(err);
            } else {
                response.json({message: "Player status updated!"});
            }
        })
    }
}