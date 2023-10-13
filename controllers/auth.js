const bcrypt = require("bcrypt");
const User = require("../models/user");
exports.signup = (req, res) => {
	const { fname, email, password, confirmPassword } = req.body;
	//--------------------------------Random photos
	const randomIndex = Math.floor(Math.random() * 7) + 1;

	// Construct the file name based on the random number
	const randomPhotoFileName = `images/dp/dp${randomIndex}.jpeg`;

	// console.log(email, password, confirmPassword);
	const user = new User(
		fname,
		email,
		password,
		confirmPassword,
		randomPhotoFileName
	);
	User.getEmail(email)
		.then((results) => {
			console.log(results);
			if (results[0].length > 0) {
				res.render("signup", {
					message: "Email already used",
				});
				return;
			} else if (password !== confirmPassword) {
				res.render("signup", {
					message: "Password doesn't match",
				});
				return;
				// console.log(hashedPassword);
			}
			bcrypt
				.hash(password, 8)
				.then((hashedPassword) => {
					user.save(hashedPassword)
						.then((result) => {
							console.log("User registered");
							res.render("login", { message: "" });
						})
						.catch((err) => {
							console.log(err);
						});
				})
				.catch((err) => {
					console.log(err);
				});
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.login = (req, res, next) => {
	const { email, password } = req.body;
	User.getAllByEmail(email)
		.then((results) => {
			// console.log(results);
			if (results[0][0].length == 0) {
				res.render("login", { message: "Invalid email or password" });
			} else {
				const result = results[0][0];
				bcrypt
					.compare(password, result.password)
					.then((entry) => {
						if (!entry) {
							res.render("login", {
								message: "Invalid email or password",
							});
						} else {
							req.session.userId = result.id;
							req.session.userType = result.type;
							req.session.userImage = result.user_image;
							if (result.type === "user") {
								res.redirect("/");
							} else if (result.type === "admin") {
								res.redirect("/admin");
							} else {
								res.redirect("/moderator");
							}
						}
					})
					.catch((err) => {
						console.log(err);
					});
				console.log(result);
			}
		})
		.catch((err) => {
			console.log(err);
		});
};
// exports.dashboard = (req, res, next) => {
// 	res.render("dashboard");
// };
