// Import the SQL connection
var connection = require("../config/connection");


// Helper function for SQL syntax.
// DISCLAIMER: functiontaken from class activities (week14/Activity16)
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

// Helper function to convert object key/value pairs to SQL syntax
// DISCLAIMER: functiontaken from class activities (week14/Activity16)
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// Object for all our SQL statement functions.
// Select
var orm = {

    // selectAll: function(tableInput, cb) {
    //   var queryString = "SELECT * FROM " + tableInput + ";";
    //   connection.query(queryString, function(err, result) {
    //     if (err) {
    //       throw err;
    //     }
    //     cb(result);
    //   });
    // },
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
    // Insert
    // insertOne: function(table, cols, vals, cb) {
    //   var queryString = "INSERT INTO " + table;
  
    //   queryString += " (";
    //   queryString += cols.toString();
    //   queryString += ") ";
    //   queryString += "VALUES (";
    //   queryString += printQuestionMarks(vals.length);
    //   queryString += ") ";
  
    //   console.log(queryString);
  
    //   connection.query(queryString, vals, function(err, result) {
    //     if (err) {
    //       throw err;
    //     }
  
    //     cb(result);
    //   });
    // },
    insertOne: function (burger, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Update
    // updateOne: function(table, objColVals, condition, cb) {
    //   var queryString = "UPDATE " + table;
  
    //   queryString += " SET ";
    //   queryString += objToSql(objColVals);
    //   queryString += " WHERE ";
    //   queryString += condition;
  
    //   console.log(queryString);
    //   connection.query(queryString, function(err, result) {
    //     if (err) {
    //       throw err;
    //     }
  
    //     cb(result);
    //   });
    // },
    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        console.log(queryString);
        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
  };
  
  module.exports = orm;
  