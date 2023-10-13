const User = require("../models/user");
const Post = require("../models/post.js");
const Subtitle = require("../models/subtitle.js");
const Code = require("../models/code.js");
const Description = require("../models/description.js");
const Output = require("../models/output.js");
const Comment = require("../models/comment");
const Modreq = require("../models/modreq");

exports.home = (req, res, next) => {
	const posts_arr = [];
	// const curr_user_id = req.session.userId;
	let totalPosts = 0;
	// const curr_user_id = 1;
	// const user_type = "admin";
	const user_type = req.session.userType;
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
					if (user_type === "admin") {
						res.render("./admin/home", {
							path: "/admin/home",
							posts_arr: posts_arr,
							search: "Top searches",
							totalPosts: totalPosts,
							user_type: user_type,
						});
					} else {
						res.redirect("/");
						// res.render("home", {
						// 	path: "/",
						// 	posts_arr: posts_arr,
						// 	search: "Top searches",
						// 	totalPosts: totalPosts,
						// 	user_type: user_type,
						// });
					}
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
	// const user_type = "user";
	// const user_type = "admin";
	// const user_id = 1;
	let user_name;
	const post_id = req.params.post_id;
	const user_namePromise = User.getUserName(user_id)
		.then((result) => {
			// console.log(result);
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
		res.render("./admin/view", {
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
exports.verifyPost = (req, res, next) => {
	const post_id = req.params.post_id;
	Post.updatePostStatus("verified", post_id)
		.then(() => {
			console.log("post verified");
			res.redirect("/admin/");
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.warnPost = (req, res, next) => {
	const post_id = req.params.post_id;
	Post.updatePostStatus("warning", post_id)
		.then(() => {
			res.redirect("/admin/");
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.notverifyPost = (req, res, next) => {
	const post_id = req.params.post_id;
	console.log("post verified");
	Post.updatePostStatus("not verified", post_id);
};
exports.getModeratorReq = (req, res, next) => {
	// const user_type = "admin";
	const user_type = req.session.userType;
	Modreq.getAll().then((results) => {
		const result = results[0];

		// console.log(result);
		res.render("./admin/moderator", {
			path: "/moderator",
			user_type: user_type,
			posts: result,
		});
	});
};
exports.approveMod = (req, res, next) => {
	const user_id = req.params.user_id;
	Modreq.delete(user_id)
		.then(() => {
			User.updateUserStatus(user_id)
				.then(() => {
					res.redirect("/admin/moderatorreq");
				})
				.catch((err) => {
					console.log(err);
				});
		})
		.catch((err) => {
			console.log(err);
		});
	console.log(user_id);
};
