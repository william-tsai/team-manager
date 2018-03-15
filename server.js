var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var app = express();

app.use(session({secret: "codingisawesome"}));
app.use(express.static(__dirname + "/manager-app/dist"));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/teamManagerNg");
mongoose.Promise = global.Promise;

require("./server/config/mongoose.js")
// In controller files, modules, such as body-parser and session, aren't required because they are already packaged/included in the "app" that was sent from the server.js to each controller file. But, mongoose and bcrypt are required.
require("./server/config/routes.js")(app);

app.listen(8000, function() {
    console.log("Listening on port 8000");
});