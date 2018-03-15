var users = require("./../controllers/users.js");
var teams = require("./../controllers/teams.js");
var players = require("./../controllers/players.js");

module.exports = function(app) {
    app.get("/api/teams", teams.fetchTeams);
    app.get("/api/teams/:id/players", players.fetchPlayers);
    app.get("/api/logout", users.logout);
    app.post("/api/register", users.register);
    app.post("/api/login", users.login);
    app.post("/api/teams", teams.addTeam);
    app.post("/api/teams/:id/sportrader/players", players.addPlayersToDB);
    // app.post("/api/teams/:id/user/players", players.addNewPlayer);
    app.put("/api/players/:id", players.updateStatus);
    app.delete("/api/teams/:id", teams.deleteTeam);

    app.all("*", function(request, response) {
        response.sendFile(path.resolve(__dirname + "/manager-app/dist/index.html"))
    });
}