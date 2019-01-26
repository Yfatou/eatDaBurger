var express = require("express");

var router = express.Router();

//Import the burger.js file
var burger = require("../models/burger.js");

// Create the router for the app
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var bObject = {
            burgers: data
        };
        console.log(bObject);
        res.render("index", bObject);
    });
});

router.post("api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.id });
    });
});

router.put("api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("Condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;