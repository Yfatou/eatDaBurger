// Import the ORM to create functions that will interct with the database
var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        //orm.selectAll("burgers", function(res) {
            orm.selectAll(function (res) {
            cb(res);
        });
    },

    //insertOne: function(cols, vals, cb) {
    insertOne: function(burger, cb) {    
        orm.insertOne(burger, function(res) {
            cb(res);
        });
    },

    //updateOne: function(objColVals, condition, cb) {
    updateOne: function(id, cb) {    
        //orm.updateOne("burgers", objColVal, condition, function(res) {
        orm.updateOne([id], function(res) {
            cb(res);
        });
    }
};

// Export the functionsfor the controller
module.exports = burger;