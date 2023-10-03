const express = require("express");
const router = express.Router();
router.get("/login", (req, res, next) => {
	res.render("login", { path: "/login"});
	// console.log(peoples.people[0].person);
});
module.exports = router;
