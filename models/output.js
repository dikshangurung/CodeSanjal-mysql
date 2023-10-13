const db = require("../util/database");

module.exports = class Output {
	constructor(output, page_position) {
		this.output = output;
		this.page_position = page_position;
	}
	save(post_id) {
		return db.query(
			"INSERT INTO outputs (output,page_position,post_id) VALUES (?, ?, ?)",
			[this.output, this.page_position, post_id]
		);
	}
	update(post_id) {
		return db.query(
			"UPDATE outputs SET output = ? WHERE page_position = ? AND post_id = ?",
			[this.output, this.page_position, post_id]
		);
	}
	static deleteByPostId(post_id) {
		return db.query("DELETE FROM outputs WHERE post_id = ?", [post_id]);
	}
	static getAllOutput(post_id) {
		return db.query("SELECT * FROM outputs WHERE post_id = ?", [post_id]);
	}
};
