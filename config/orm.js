// Import the SQL connection
var connection = require("../config/connection");


// Object for all our SQL statement functions.
// Select all the existing data
var orm = {

    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
   
    // Insert one entry
    insertOne: function (burger, cb) {
        // Insert into the table the burger_name entered by the user
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // Update the devoured value
    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
  };
  
  // Export ORM
  module.exports = orm;
  