const db = require("../util/database");

module.exports = class Modreq {
	constructor(user_name, requestDate) {
		this.user_name = user_name;
		this.requestDate = requestDate;
	}
	save(user_id) {
		return db.query(
			"INSERT INTO moderator_requests (user_id,user_name,requestDate) VALUES (?, ?, ?)",
			[user_id, this.user_name, this.requestDate]
		);
	}
	static getAll() {
		return db.query("SELECT * FROM moderator_requests");
	}
	static delete(user_id) {
		return db.query("DELETE FROM moderator_requests WHERE user_id = ?", [
			user_id,
		]);
	}
};
