var theConnection = null;
var mysql = require("mysql");

/**
 * Before running your application update your DBConfig here!
 * @type {{host: string, user: string, password: string, database: string, port: number}}
 */
var theDbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "spotify_db",
    port: 3306
};

/**
 * Method is used to create a connection to the database.
 * @returns {*} connection
 */
exports.getConnection = function() {
    theConnection = mysql.createConnection(theDbConfig);
    return theConnection;
};

/**
 * Method is used to terminate the database connection
 */
exports.endConnection = function() {
    if(theConnection != null) {
        theConnection.end();
    }
    theConnection = null;
};
