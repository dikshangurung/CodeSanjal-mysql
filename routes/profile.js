const express = require("express");
const router = express.Router();
router.get("/profile", (req, res, next) => {
	res.render("profile",{path: '/profile'});
});

module.exports = router;
