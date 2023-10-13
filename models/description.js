const db = require("../util/database");

module.exports = class Description {
	constructor(description, page_position) {
		this.description = description;
		this.page_position = page_position;
	}
	save(post_id) {
		return db.query(
			"INSERT INTO descriptions (description,page_position,post_id) VALUES (?, ?, ?)",
			[this.description, this.page_position, post_id]
		);
	}
	update(post_id) {
		return db.query(
			"UPDATE descriptions SET description = ? WHERE page_position = ? AND post_id = ?",
			[this.description, this.page_position, post_id]
		);
	}
	static deleteByPostId(post_id) {
		return db.query("DELETE FROM descriptions WHERE post_id = ?", [post_id]);
	}
	static getAllDescription(post_id) {
		return db.query("SELECT * FROM descriptions WHERE post_id = ?", [
			post_id,
		]);
	}
};
