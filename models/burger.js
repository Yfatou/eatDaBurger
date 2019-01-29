// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    insertOne: function(burger, cb) {    
        orm.insertOne(burger, function(res) {
            cb(res);
        });
    },

    updateOne: function(id, cb) {    
        orm.updateOne([id], function(res) {
            cb(res);
        });
    }
};

// Export the functionsfor the controller
module.exports = burger;