const express = require("express");
const router = express.Router();
const peoples = require("./util.js");
router.get("/", (req, res, next) => {
	res.render("home", { path: "/", peoples: peoples });
	// console.log(peoples.people[0].person);
});
module.exports = router;
