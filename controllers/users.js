// const peoples = require("./util.js");
const User = require("../models/user");
const Post = require("../models/post.js");
const Subtitle = require("../models/subtitle.js");
const Code = require("../models/code.js");
const Description = require("../models/description.js");
const Output = require("../models/output.js");
const Comment = require("../models/comment");
const { name } = require("ejs");
// const codeMirrorInstances = require("../public/js/post.js");
exports.home = (req, res, next) => {
	const posts_arr = [];
	// const curr_user_id = req.session.userId;
	let totalPosts = 0;
	const curr_user_id = 1;
	// const user_image = req.session.userImage;
	let user_type = "normal";
	if (req.session.userType !== undefined) {
		user_type = req.session.userType;
	}

	// user_type = req.session.userType;
	// console.log(user_type);
	Post.selectAll()
		.then((result) => {
			const posts = result[0];
			const userPromises = [];
			// let totalComments;
			// const commentPromise = Comment.getAllCommentByUserId()
			for (const post of posts) {
				totalPosts++;
				// console.log(post);
				const userId = post.user_id;
				const userNamePromise = User.getUserName(userId)
					.then((name) => {
						console.log(name);
						const posts_arr_items = {
							post_id: post.post_id,
							user_id: userId,
							name: name[0][0].name,
							image: post.user_image,
							title: post.title,
							date: post.createdAt,
							language: post.language_used,
							upvote: post.upvote,
							comments: post.comment_number,
							status: post.status,
						};
						posts_arr.push(posts_arr_items);
					})
					.catch((err) => {
						console.log(err);
					});

				userPromises.push(userNamePromise);
			}

			// Wait for all user name retrieval promises to resolve
			Promise.all(userPromises)
				.then(() => {
					// console.log(posts_arr); // The posts_arr is now populated
					// console.log(posts_arr);
					// console.log(posts_arr);
					res.render("home", {
						path: "/",
						posts_arr: posts_arr,
						search: "Top searches",
						totalPosts: totalPosts,
						user_type: user_type,
					});
				})
				.catch((err) => {
					console.log(err);
					res.status(500).send("Internal Server Error");
				});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send("Internal Server Error");
		});
};
exports.getPost = (req, res, next) => {
	let post_position_arr = [];
	let position_arranage_arr = [];
	let comments_arr = [];
	const userPromises = [];
	const commentPromises = [];
	let title;
	let language_used;
	let upvote;
	const user_id = req.session.userId;
	const user_type = req.session.userType;
	// const user_id = 1;
	// const user_type = "user";
	// const user_type = "admin";
	// const user_id = 1;
	let user_name;
	const post_id = req.params.post_id;
	const user_namePromise = User.getUserName(user_id)
		.then((result) => {
			user_name = result[0][0].name;
		})
		.catch((err) => {
			console.log(err);
		});
	userPromises.push(user_namePromise);
	const titlePromise = Post.getTitle(post_id)
		.then((result) => {
			title = result[0][0].title;
		})
		.catch((err) => {
			console.log(err);
		});
	userPromises.push(titlePromise);
	const upvotePromise = Post.getUpvote(post_id)
		.then((result) => {
			upvote = result[0][0].upvote;
		})
		.catch((err) => {
			console.log(err);
		});
	userPromises.push(upvotePromise);
	const languagePromise = Post.getLanguage(post_id)
		.then((result) => {
			language_used = result[0][0].language_used;
		})
		.catch((err) => {
			console.log(err);
		});
	userPromises.push(languagePromise);
	const subtitlePromise = Subtitle.getAllSubtitle(post_id)
		.then((results) => {
			const result = results[0];
			// console.log(result);
			for (const subtitles of result) {
				// console.log(subtitles);
				const subtitleInfo = {
					subtitle: subtitles.subtitle,
					post_type: "subtitle",
					page_position: subtitles.page_position,
				};
				position_arranage_arr.push(subtitleInfo);
			}
		})
		.catch((err) => {
			console.log(err);
		});
	userPromises.push(subtitlePromise);
	const codePromise = Code.getAllCode(post_id)
		.then((results) => {
			const result = results[0];
			// console.log(result);
			for (const codes of result) {
				// console.log(subtitles);
				const codeInfo = {
					code: codes.code,
					post_type: "code",
					page_position: codes.page_position,
				};
				position_arranage_arr.push(codeInfo);
			}
		})
		.catch((err) => {
			console.log(err);
		});
	userPromises.push(codePromise);
	const descriptionPromise = Description.getAllDescription(post_id)
		.then((results) => {
			const result = results[0];
			// console.log(result);
			for (const descriptions of result) {
				// console.log(subtitles);
				const descriptionInfo = {
					description: descriptions.description,
					post_type: "description",
					page_position: descriptions.page_position,
				};
				position_arranage_arr.push(descriptionInfo);
			}
		})
		.catch((err) => {
			console.log(err);
		});
	userPromises.push(descriptionPromise);

	const outputPromise = Output.getAllOutput(post_id)
		.then((results) => {
			const result = results[0];
			// console.log(result);
			for (const outputs of result) {
				// console.log(subtitles);
				const outputInfo = {
					output: outputs.output,
					post_type: "output",
					page_position: outputs.page_position,
				};
				position_arranage_arr.push(outputInfo);
			}
		})
		.catch((err) => {
			console.log(err);
		});
	userPromises.push(outputPromise);
	//-------------------------------------Commentss
	const commentPromise = Comment.getAllCommentByPost(post_id)
		.then((results) => {
			const result = results[0];
			// console.log(result);
			for (const comments of result) {
				// console.log(comments);
				const commentInfo = {
					comment: comments.comment,
					user_id: comments.user_id,
					name: comments.comment_by_user,
					user_image: comments.user_image,
				};
				comments_arr.push(commentInfo);
				// console.log(subtitles);
				// console.log(comments);
				// userPromises.push(innerCommentPromise);
			}
		})
		.catch((err) => {
			console.log(err);
		});
	userPromises.push(commentPromise);
	Promise.all(userPromises).then(() => {
		position_arranage_arr.sort((a, b) => a.page_position - b.page_position);
		const new_position_arrange_arr = position_arranage_arr.map(
			({ page_position, ...rest }) => rest
		);
		post_position_arr = [
			{ title: title, post_type: "title" },
			...new_position_arrange_arr,
			{ language_used: language_used, post_type: "language_used" },
			{ upvote: upvote, post_type: "upvote" },
		];
		// console.log(post_position_arr);
		// console.log("*******************");
		// console.log(comments_arr);
		// for (const key of post_position_arr) {
		// 	// console.log(key[key.post_type])
		// 	if (key.post_type == "upvote") {
		// 		console.log(key[key.post_type]);
		// 	}
		// }
		// console.log(post_id);
		res.render("view", {
			path: "/",
			post_position_arr: post_position_arr,
			post_id: post_id,
			comments_arr: comments_arr,
			user_name: user_name,
			user_type: user_type,
		});
		// console.log(post_position_arr);
		// console.log(new_position_arrange_arr);
	});
	// console.log(position_arranage_arr);

	// console.log(post_id);
};

exports.postComment = (req, res, next) => {
	// console.log("ok");
	// const post_id = req.params.postId;
	// const post_id = req.params.post_id;
	const user_id = req.session.userId;
	const { post_id, post_comment, comment_by_user } = req.body;
	const comment = new Comment(
		post_comment,
		post_id,
		comment_by_user,
		"../images/dp.JPG"
	);
	comment
		.save(user_id)
		.then(() => {
			console.log("Data entered at comments table");
		})
		.catch((err) => {
			console.log(err);
		});

	Post.updateComment(post_id)
		.then(() => {
			res.redirect(`/view/${post_id}`);
		})
		.catch((err) => {
			console.log(err);
		});
	// console.log(post_id);
	// console.log(post_comment);
	// console.log(req.session.userId);
};

exports.updateUpvote = (req, res, next) => {
	const post_id = req.params.post_id;
	Post.updateUpvote(post_id)
		.then(() => {
			res.redirect(`/view/${post_id}`);
		})
		.catch((err) => {
			console.log(err);
		});
	// console.log(post_id);
};

exports.post = (req, res, next) => {
	// console.log(req.session.userId);
	const user_type = req.session.userType;

	res.render("post", { path: "/post", user_type: user_type });
};
// exports.profile = (req, res, next) => {
// 	res.render("profile", { path: "/profile" });
// };
exports.login = (req, res, next) => {
	res.render("login", { message: "" });
};
exports.signup = (req, res, next) => {
	res.render("signup", { message: "" });
};
exports.post_content = (req, res, next) => {
	let upvote = 0;
	let currentPostId = 0;
	let user_id = req.session.userId;
	const user_image = req.session.userImage;
	const { title_content_save, selectedOption } = req.body;
	const currentDate = new Date();
	const post = new Post(
		title_content_save,
		upvote,
		"not verified",
		user_id,
		selectedOption,
		`${currentDate.getFullYear()}/${currentDate.getMonth()}/${currentDate.getDate()}`,
		0,
		user_image
	);
	console.log(req.body);
	post.save(user_id)
		.then((result) => {
			// console.log(result);
			let postId = result[0].insertId;
			for (let key in req.body) {
				let value = req.body[key];
				if (key.split("_")[0] == "subtitle") {
					// console.log(postId);
					// console.log(result.insertId);
					const subtitle = new Subtitle(
						value,
						parseInt(key.split("_")[2])
					);
					subtitle
						.save(postId)
						.then(() => {
							console.log("Data entered to table subtitles");
						})
						.catch((err) => {
							console.log(err);
						});
				} else if (key.split("_")[0] == "code") {
					const code = new Code(value, parseInt(key.split("_")[2]));
					code.save(postId)
						.then(() => {
							console.log("Data entered to table codes");
						})
						.catch((err) => {
							console.log(err);
						});
				} else if (key.split("_")[0] == "description") {
					const description = new Description(
						value,
						parseInt(key.split("_")[2])
					);
					description
						.save(postId)
						.then(() => {
							console.log(
								"Data entered to the table descriptions"
							);
						})
						.catch((err) => {
							console.log(err);
						});
				} else if (key.split("_")[0] == "output") {
					const output = new Output(
						value,
						parseInt(key.split("_")[2])
					);
					output
						.save(postId)
						.then(() => {
							console.log("Data entered to the table outputs");
						})
						.catch((err) => {
							console.log(err);
						});
				}
				// console.log(`Key: ${key}, Value: ${value}`);
			}
			res.redirect("/");
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.getSearch = (req, res, next) => {
	const { search } = req.body;
	let totalPosts = 0;
	// const userPromise = [];
	const posts_arr = [];
	// const user_type = "user";
	const user_type = req.session.userType;
	Post.searchPost(search)
		.then((result) => {
			const posts = result[0];
			const userPromises = [];
			// let totalComments;
			// const commentPromise = Comment.getAllCommentByUserId()
			for (const post of posts) {
				totalPosts++;
				// console.log(post);
				const userId = post.user_id;
				const userNamePromise = User.getUserName(userId)
					.then((name) => {
						const posts_arr_items = {
							post_id: post.post_id,
							user_id: userId,
							name: name[0][0].name,
							image: post.user_image,
							title: post.title,
							date: post.createdAt,
							language: post.language_used,
							upvote: post.upvote,
							comments: post.comment_number,
							status: post.status,
						};
						posts_arr.push(posts_arr_items);
					})
					.catch((err) => {
						console.log(err);
					});

				userPromises.push(userNamePromise);
			}

			// Wait for all user name retrieval promises to resolve
			Promise.all(userPromises)
				.then(() => {
					// console.log(posts_arr); // The posts_arr is now populated
					// console.log(posts_arr);
					console.log(posts_arr);
					res.render("home", {
						path: "/",
						posts_arr: posts_arr,
						search: search,
						totalPosts: totalPosts,
						user_type: user_type,
					});
				})
				.catch((err) => {
					console.log(err);
					res.status(500).send("Internal Server Error");
				});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send("Internal Server Error");
		});

	console.log(search);
};
// const a = "subtitle_content_10save";
// console.log(a.split("_")[2]);
// console.log(parseInt(a.split("_")[2]));
// const currentDate = new Date();
// console.log(currentDate);
// console.log(
// 	`${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`
// );
