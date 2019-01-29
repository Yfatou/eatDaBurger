var express = require("express");

//DISCLAIMER: the addition of the npm library method-override has been found
//----------  on internet: https://dev.to/moz5691/method-override-for-put-and-delete-in-html-3fp2
// as a possible solution when the put request is not working
//""'method-override' allows us to use PUT or DELETE in places where the client doesn't support it"
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give the server access to them
var routes = require("./controllers/burgers_controllers");

app.use(routes);

//Start the server
app.listen(PORT, function() {
    console.log("Server listenning on: http://localhost:" + PORT);
});