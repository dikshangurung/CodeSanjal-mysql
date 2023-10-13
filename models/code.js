const db = require("../util/database");

module.exports = class Code {
	constructor(code, page_position) {
		this.code = code;
		this.page_position = page_position;
	}
	save(post_id) {
		return db.query(
			"INSERT INTO codes (code,page_position,post_id) VALUES (?, ?, ?)",
			[this.code, this.page_position, post_id]
		);
	}
	update(post_id) {
		return db.query(
			"UPDATE codes SET code = ? WHERE page_position = ? AND post_id = ?",
			[this.code, this.page_position, post_id]
		);
	}
	static deleteByPostId(post_id) {
		return db.query("DELETE FROM codes WHERE post_id = ?", [post_id]);
	}
	static getAllCode(post_id) {
		return db.query("SELECT * FROM codes WHERE post_id = ?", [post_id]);
	}
};
