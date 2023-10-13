const db = require("../util/database");

module.exports = class Comment {
	constructor(comment, post_id, comment_by_user, user_image) {
		this.comment = comment;
		this.post_id = post_id;
		this.comment_by_user = comment_by_user;
		this.user_image = user_image;
	}
	save(user_id) {
		return db.query(
			"INSERT INTO comments (comment,post_id,user_id,comment_by_user,user_image) VALUES (?, ?, ?, ?, ?)",
			[
				this.comment,
				this.post_id,
				user_id,
				this.comment_by_user,
				this.user_image,
			]
		);
	}
	static deleteByPostId(post_id) {
		return db.query("DELETE FROM comments WHERE post_id = ?", [post_id]);
	}
	static getAllCommentByPost(post_id) {
		return db.query("SELECT * FROM comments WHERE post_id = ?", [post_id]);
	}
	static getAllCommentByUserId(user_id) {
		return db.query(
			"SELECT COUNT(*) AS comment_count FROM comments WHERE user_id = ?",
			[user_id]
		);
	}
	static getTotalNumberOfCommentByPostId(post_id) {
		return db.query(
			"SELECT COUNT(*) AS total_comments FROM comments WHERE post_id = ?",
			[post_id]
		);
	}
};
