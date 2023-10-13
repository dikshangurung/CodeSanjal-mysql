const db = require("../util/database");

module.exports = class User {
	constructor(fname, email, password, confirmPassword, image) {
		this.fname = fname;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.image = image;
	}
	save(hashedPassword) {
		return db.query(
			"INSERT INTO users (name, email, password, type, user_image) VALUES (?, ?, ?, ?, ?)",
			[this.fname, this.email, hashedPassword, "user", this.image]
		);
	}
	static getEmail(email) {
		return db.query("SELECT email FROM users WHERE email = ?", [email]);
	}
	static getAllByEmail(email) {
		return db.query("SELECT * FROM users WHERE email = ?", [email]);
	}
	static getUserName(user_id) {
		return db.query("SELECT name FROM users WHERE id = ?", [user_id]);
	}
	static getAllById(user_id) {
		return db.query("SELECT * FROM users WHERE id = ?", [user_id]);
	}
	static updateUserStatus(user_id) {
		return db.query("UPDATE users SET type = ? WHERE id = ?", [
			"moderator",
			user_id,
		]);
	}
};
