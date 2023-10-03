const express = require("express");
const router = express.Router();
const people = require("./util.js");
let peoples = people.people;
router.get("/post", (req, res, next) => {
	res.render("post", { path: "/post" });
});
router.post("/post-content", (req, res, next) => {
	peoples.push({
		person: {
			name: "Dikshan Gurung",
			contents: [
				{
					title: req.body.title_content_save,
					code: req.body.code_content_save,
					description: req.body.description_content_save,
					output: req.body.output_content_save,
					upvote: 0,
					comments: 0,
					language_used: "JS",
					date: "2023/01/01",
				},
			],
		},
	});
	res.redirect("/");
});
module.exports = router;
