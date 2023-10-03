const express = require("express");
const router = express.Router();
router.get("/view", (req, res, next) => {
	res.render("view",{path: '/home'});
});
module.exports = router;
