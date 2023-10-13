const db = require("../util/database");

module.exports = class Post {
	constructor(
		title,
		upvote,
		status,
		user_id,
		language_used,
		createdAt,
		comment_number,
		user_image
	) {
		this.title = title;
		this.upvote = upvote;
		this.status = status;
		this.user_id = user_id;
		this.language_used = language_used;
		this.createdAt = createdAt;
		this.comment_number = comment_number;
		this.user_image = user_image;
	}
	save() {
		return db
			.query(
				"INSERT INTO posts (title, upvote, status, user_id, language_used, createdAt, comment_number, user_image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
				[
					this.title,
					this.upvote,
					this.status,
					this.user_id,
					this.language_used,
					this.createdAt,
					this.comment_number,
					this.user_image,
				]
			)
			.then((result) => {
				return result;
			});
	}
	update(post_id) {
		return db.query(
			"UPDATE posts SET title = ?, upvote = ?, status = ?, user_id = ?, language_used = ?, createdAt = ?, comment_number = ?, user_image = ? WHERE post_id = ?",
			[
				this.title,
				this.upvote,
				this.status,
				this.user_id,
				this.language_used,
				this.createdAt,
				this.comment_number,
				this.user_image,
				post_id,
			]
		);
	}
	static deleteByPostId(post_id) {
		return db.query("DELETE FROM posts WHERE post_id = ?", [post_id]);
	}
	static getId(title) {
		return db.query("SELECT post_id FROM posts WHERE title = ?", [title]);
	}
	static selectAll() {
		return db.query("SELECT * FROM posts");
	}
	static getTitle(post_id) {
		return db.query("SELECT title FROM posts WHERE post_id = ?", [post_id]);
	}
	static getLanguage(post_id) {
		return db.query("SELECT language_used FROM posts WHERE post_id = ?", [
			post_id,
		]);
	}
	static getUpvote(post_id) {
		return db.query("SELECT upvote FROM posts WHERE post_id = ?", [
			post_id,
		]);
	}
	static updateUpvote(post_id) {
		return db.query(
			"UPDATE posts SET upvote = upvote + 1 WHERE post_id = ?",
			[post_id]
		);
	}
	static updateComment(post_id) {
		return db.query(
			"UPDATE posts SET comment_number = comment_number + 1 WHERE post_id = ?",
			[post_id]
		);
	}
	static getTotalNumberOfUpvotes(user_id) {
		return db.query(
			"SELECT SUM(upvote) AS total_upvotes FROM posts WHERE user_id = ?",
			[user_id]
		);
	}
	static getNumberOfPostById(user_id) {
		return db.query(
			"SELECT COUNT(*) AS total_posts FROM posts WHERE user_id = ?",
			[user_id]
		);
	}
	static getNumberOfNotVerifiedPostById(user_id) {
		return db.query(
			"SELECT COUNT(*) AS not_verified_count FROM posts WHERE status = 'warning' AND user_id = ?",
			[user_id]
		);
	}
	static getTotalCommentsByPostId(post_id) {
		return db.query("SELECT comment_number FROM posts WHERE post_id = ?", [
			post_id,
		]);
	}
	static searchPost(search_key) {
		return db.query("SELECT * FROM posts WHERE title LIKE ?", [
			`%${search_key}%`,
		]);
	}
	static updatePostStatus(status_info, post_id) {
		return db.query("UPDATE posts SET status = ? WHERE post_id = ?", [
			status_info,
			post_id,
		]);
	}
};
