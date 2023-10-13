const User = require("../models/user");
const Post = require("../models/post.js");
const Subtitle = require("../models/subtitle.js");
const Code = require("../models/code.js");
const Description = require("../models/description.js");
const Output = require("../models/output.js");
const Comment = require("../models/comment");
const Modreq = require("../models/modreq");
exports.profile = (req, res, next) => {
	const user_id = req.session.userId;
	const user_type = req.session.userType;
	const user_image = req.session.userImage;
	let user_name,
		totalUpvotes,
		totalComments,
		totalPosts,
		totalNotVerifiedPosts;
	let userPromises = [];
	let posts_arr = [];
	let post_arr_notVerified = [];
	Post.selectAll()
		.then((result) => {
			////////////////////////////////// comments and upvotes
			const upvotePromise = Post.getTotalNumberOfUpvotes(user_id)
				.then((result) => {
					totalUpvotes = result[0][0].total_upvotes;
					// console.log(totalUpvotes);
				})
				.catch((err) => {
					console.log(err);
				});
			userPromises.push(upvotePromise);
			const commentPromise = Comment.getAllCommentByUserId(user_id).then(
				(result) => {
					totalComments = result[0][0].comment_count;
					console.log(totalComments);
				}
			);
			userPromises.push(commentPromise);
			/////////////////////User Name
			const userNamePromise = User.getUserName(user_id)
				.then((result) => {
					user_name = result[0][0].name;
					// console.log(user_name);
				})
				.catch((err) => {
					console.log();
				});
			userPromises.push(userNamePromise);
			const postPromise = Post.getNumberOfPostById(user_id)
				.then((result) => {
					totalPosts = result[0][0].total_posts;
					// console.log(totalPosts);
				})
				.catch((err) => {
					console.log(err);
				});
			userPromises.push(postPromise);
			////////////////////////////Not verified code
			const notVerifiedPostPromise = Post.getNumberOfNotVerifiedPostById(
				user_id
			)
				.then((result) => {
					totalNotVerifiedPosts = result[0][0].not_verified_count;
					// console.log(totalNotVerifiedPosts);
				})
				.catch((err) => {
					console.log(err);
				});
			userPromises.push(notVerifiedPostPromise);
			const posts = result[0];
			///////////////////////////All posts codes
			for (const post of posts) {
				// console.log(post);
				const userId = post.user_id;
				if (userId === user_id) {
					const userNamePromise = User.getUserName(userId)
						.then((name) => {
							const posts_arr_items = {
								post_id: post.post_id,
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
			}
			///////////////////////////Not verified All posts codes post_arr_notVerified
			for (const post of posts) {
				// console.log(post);
				if (post.status === "warning") {
					const userId = post.user_id;
					if (userId == user_id) {
						const userNamePromise = User.getUserName(userId)
							.then((name) => {
								const posts_arr_items = {
									post_id: post.post_id,
									name: name[0][0].name,
									image: post.user_image,
									title: post.title,
									date: post.createdAt,
									language: post.language_used,
									upvote: post.upvote,
									comments: post.comment_number,
									status: post.status,
								};
								post_arr_notVerified.push(posts_arr_items);
							})
							.catch((err) => {
								console.log(err);
							});
						userPromises.push(userNamePromise);
					}
				}
			}
			// Wait for all user name retrieval promises to resolve
			Promise.all(userPromises)
				.then(() => {
					// console.log(posts_arr); // The posts_arr is now populated

					console.log(
						totalPosts,
						user_name,
						totalUpvotes,
						totalComments,
						totalNotVerifiedPosts
					);
					// console.log(post_arr_notVerified);
					// console.log(posts_arr);
					// console.log(posts_arr);
					res.render("profile", {
						path: "/profile",
						user_name: user_name,
						totalComments: totalComments,
						totalUpvotes: totalUpvotes,
						totalPosts: totalPosts,
						totalNotVerifiedPosts: totalNotVerifiedPosts,
						posts_arr: posts_arr,
						post_arr_notVerified: post_arr_notVerified,
						user_type: user_type,
						user_id: user_id,
						user_image: user_image
					});
					// res.render("home", { path: "/", posts_arr: posts_arr });
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

	// Promise.all(userPromises)
	// 	.then(() => {
	// 		res.render("profile", {
	// 			path: "/profile",
	// 			user_name: user_name,
	// 			totalComments: totalComments,
	// 			totalUpvotes: totalUpvotes,
	// 			totalPosts: totalPosts,
	// 			totalNotVerifiedPosts: totalNotVerifiedPosts,
	// 		});
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
};

exports.getEdit = (req, res, next) => {
	let post_position_arr = [];
	let position_arranage_arr = [];
	const userPromises = [];
	let title;
	let language_used;
	let upvote, totalComments;
	const user_id = req.session.userId;
	const user_type = req.session.userType;
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
	////////////Total comments
	const totalCommentsPromise = Post.getTotalCommentsByPostId(post_id).then(
		(result) => {
			totalComments = result[0][0].comment_number;
			// console.log(totalComments);
		}
	);
	Promise.all(userPromises).then(() => {
		position_arranage_arr.sort((a, b) => a.page_position - b.page_position);
		// console.log(position_arranage_arr);
		const new_position_arrange_arr = position_arranage_arr;
		post_position_arr = [
			{ title: title, post_type: "title" },
			...new_position_arrange_arr,
			{ language_used: language_used, post_type: "language_used" },
			{ upvote: upvote, post_type: "upvote" },
		];
		// console.log(totalComments);
		// console.log(post_position_arr);
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
		res.render("edit", {
			path: "/",
			post_position_arr: post_position_arr,
			post_id: post_id,
			user_name: user_name,
			totalComments: totalComments,
			upvote: upvote,
			user_type: user_type,
			user_id: user_id,
		});
		// console.log(post_position_arr);
		// console.log(new_position_arrange_arr);
	});
	// console.log(position_arranage_arr);

	// console.log(post_id);
	// res.render("edit", { path: "profile" });
};
exports.postEdit = (req, res, next) => {
	// let user_id = req.body.userId;
	const user_id = req.session.userId;
	const user_type = req.session.userType;
	console.log(user_id);
	const {
		title_content_save,
		selectedOption,
		upvote,
		totalComments,
		post_id,
	} = req.body;
	// console.log(typeof Number(totalComments));
	// console.log(typeof upvote);
	const user_image = req.session.userImage;
	const currentDate = new Date();
	const post = new Post(
		title_content_save,
		Number(upvote),
		"not verified",
		user_id,
		selectedOption,
		`${currentDate.getFullYear()}/${currentDate.getMonth()}/${currentDate.getDate()}`,
		Number(totalComments),
		user_image
	);
	// post.update(post_id)
	// 	.then((result) => {
	// 		console.log(result);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
	// console.log(req.body);
	post.update(post_id)
		.then((result) => {
			console.log(result);
			// let postId = result[0].insertId;
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
						.update(post_id)
						.then(() => {
							console.log("Data updated in table subtitles");
						})
						.catch((err) => {
							console.log(err);
						});
				} else if (key.split("_")[0] == "code") {
					const code = new Code(value, parseInt(key.split("_")[2]));
					code.update(post_id)
						.then(() => {
							console.log("Data updated in table codes");
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
						.update(post_id)
						.then(() => {
							console.log(
								"Data updated in the table descriptions"
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
						.update(post_id)
						.then(() => {
							console.log("Data updated in the table outputs");
						})
						.catch((err) => {
							console.log(err);
						});
				}
				// console.log(`Key: ${key}, Value: ${value}`);
			}
			res.redirect("/profile");
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.getDelete = (req, res, next) => {
	const post_id = req.params.post_id;

	Subtitle.deleteByPostId(post_id)
		.then(() => {})
		.catch((err) => {
			console.log(err);
		});
	Code.deleteByPostId(post_id)
		.then(() => {})
		.catch((err) => {
			console.log(err);
		});
	Output.deleteByPostId(post_id)
		.then(() => {})
		.catch((err) => {
			console.log(err);
		});
	Description.deleteByPostId(post_id)
		.then(() => {})
		.catch((err) => {
			console.log(err);
		});
	Comment.deleteByPostId(post_id)
		.then(() => {})
		.catch((err) => {
			console.log(err);
		});

	Post.deleteByPostId(post_id)
		.then(() => {
			console.log("Posts deleted");
			res.redirect("/profile");
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.viewProfile = (req, res, next) => {
	const user_id = req.params.user_id;
	let user_type = "normal";
	if (req.session.userType !== undefined) {
		user_type = req.session.userType;
	}

	let user_name,
		totalUpvotes,
		totalComments,
		totalPosts,
		totalNotVerifiedPosts;
	let userPromises = [];
	let posts_arr = [];
	let post_arr_notVerified = [];
	const curr_user_id = 1;
	Post.selectAll()
		.then((result) => {
			////////////////////////////////// comments and upvotes
			const upvotePromise = Post.getTotalNumberOfUpvotes(user_id)
				.then((result) => {
					totalUpvotes = result[0][0].total_upvotes;
					// console.log(totalUpvotes);
				})
				.catch((err) => {
					console.log(err);
				});
			userPromises.push(upvotePromise);
			const commentPromise = Comment.getAllCommentByUserId(user_id).then(
				(result) => {
					totalComments = result[0][0].comment_count;
					console.log(totalComments);
				}
			);
			userPromises.push(commentPromise);
			/////////////////////User Name
			const userNamePromise = User.getUserName(user_id)
				.then((result) => {
					user_name = result[0][0].name;
					// console.log(user_name);
				})
				.catch((err) => {
					console.log();
				});
			userPromises.push(userNamePromise);
			const postPromise = Post.getNumberOfPostById(user_id)
				.then((result) => {
					totalPosts = result[0][0].total_posts;
					// console.log(totalPosts);
				})
				.catch((err) => {
					console.log(err);
				});
			userPromises.push(postPromise);
			////////////////////////////Not verified code
			const notVerifiedPostPromise = Post.getNumberOfNotVerifiedPostById(
				user_id
			)
				.then((result) => {
					totalNotVerifiedPosts = result[0][0].not_verified_count;
					// console.log(totalNotVerifiedPosts);
				})
				.catch((err) => {
					console.log(err);
				});
			userPromises.push(notVerifiedPostPromise);
			const posts = result[0];
			///////////////////////////All posts codes
			for (const post of posts) {
				// console.log(post);
				// console.log(user_id);
				const userId = post.user_id;
				// console.log(userId);
				if (userId == user_id) {
					// console.log(userId);
					const userNamePromise = User.getUserName(userId)
						.then((name) => {
							const posts_arr_items = {
								post_id: post.post_id,
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
			}
			///////////////////////////Not verified All posts codes post_arr_notVerified
			for (const post of posts) {
				// console.log(post);
				if (post.status === "warning") {
					const userId = post.user_id;
					if (userId == user_id) {
						const userNamePromise = User.getUserName(userId)
							.then((name) => {
								const posts_arr_items = {
									post_id: post.post_id,
									name: name[0][0].name,
									image: post.user_image,
									title: post.title,
									date: post.createdAt,
									language: post.language_used,
									upvote: post.upvote,
									comments: post.comment_number,
									status: post.status,
								};
								post_arr_notVerified.push(posts_arr_items);
							})
							.catch((err) => {
								console.log(err);
							});
						userPromises.push(userNamePromise);
					}
				}
			}
			// Wait for all user name retrieval promises to resolve
			Promise.all(userPromises)
				.then(() => {
					// console.log(posts_arr); // The posts_arr is now populated

					// console.log(
					// 	totalPosts,
					// 	user_name,
					// 	totalUpvotes,
					// 	totalComments,
					// 	totalNotVerifiedPosts
					// );
					// console.log(post_arr_notVerified);
					// console.log(posts_arr);
					// console.log(posts_arr);
					res.render("individual", {
						path: "/profile",
						user_name: user_name,
						totalComments: totalComments,
						totalUpvotes: totalUpvotes,
						totalPosts: totalPosts,
						totalNotVerifiedPosts: totalNotVerifiedPosts,
						posts_arr: posts_arr,
						post_arr_notVerified: post_arr_notVerified,
						user_type: user_type,
					});
					// res.render("home", { path: "/", posts_arr: posts_arr });
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
	// console.log(user_id);
};

exports.requestMod = (req, res, next) => {
	const user_id = req.params.user_id;
	const currentDate = new Date();
	User.getUserName(user_id).then((result) => {
		const name = result[0][0].name;

		const modreq = new Modreq(
			name,
			`${currentDate.getFullYear()}/${currentDate.getMonth()}/${currentDate.getDate()}`
		);
		modreq
			.save(user_id)
			.then(() => {
				console.log("data in moderator_requests table added");
				res.redirect("/");
			})
			.catch((err) => {
				console.log(err);
			});
		// console.log(name);
	});

	// console.log(user_id);
};
