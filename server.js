var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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