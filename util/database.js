const mysql = require("mysql2");

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "codesanjal",
	password: "mys@l2058",
});
pool.getConnection((err,connection) => {
	if (err) {
		console.log(err);
	} else {
		console.log("My sql connected");
	}
});
module.exports = pool.promise();
