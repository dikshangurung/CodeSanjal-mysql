const db = require("../util/database");

module.exports = class Subtitle {
	constructor(subtitle, page_position) {
		this.subtitle = subtitle;
		this.page_position = page_position;
	}
	save(post_id) {
		return db.query(
			"INSERT INTO subtitles (subtitle,page_position,post_id) VALUES (?, ?, ?)",
			[this.subtitle, this.page_position, post_id]
		);
	}
	update(post_id) {
		return db.query(
			"UPDATE subtitles SET subtitle = ? WHERE page_position = ? AND post_id = ?",
			[this.subtitle, this.page_position, post_id]
		); 
	}
	static deleteByPostId(post_id) {
		return db.query("DELETE FROM subtitles WHERE post_id = ?", [post_id]);
	}
	static getAllSubtitle(post_id) {
		return db.query("SELECT * FROM subtitles WHERE post_id = ?", [post_id]);
	}
};
