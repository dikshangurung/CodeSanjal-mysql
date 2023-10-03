const express = require("express");
const router = express.Router();
router.get("/signup", (req, res, next) => {
	res.render("signup", { path: "/signup"});
	// console.log(peoples.people[0].person);
});
module.exports = router;
