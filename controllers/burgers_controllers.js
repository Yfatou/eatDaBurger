var express = require("express");

var router = express.Router();

//Import the burger.js file
var burger = require("../models/burger.js");

// Create the router for the app
// Get method to display all the burgers in the database
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var bObject = {
            burgers: data
        };
        console.log(bObject);
        res.render("index", bObject);
    });
});

// Post method to add a new burger in the database
router.post("/", function (req, res) {
    var newBurger = req.body.burger_name; //The new burger

    burger.insertOne(newBurger, function () { // Once the insert is done
        res.redirect("/");                    // redirect to the homepage
    });
});

// Put method to update a burger in the database
router.put("/:id", function (req, res) {
    var id = req.params.id;//Get the id of the burger we want to update

    burger.updateOne(id, function () {//Once the update is done,
        res.redirect("/");            // redirect to the homepage
    });
});

// Exports the router
module.exports = router;