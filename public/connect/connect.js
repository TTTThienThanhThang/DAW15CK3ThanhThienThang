var mysql = require('mysql');
var conn = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "qldg"
});
module.exports = conn;