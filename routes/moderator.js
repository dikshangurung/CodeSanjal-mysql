const express = require("express");
// const adminController = require("../controllers/admin");
const router = express.Router();
const moderatorController = require("../controllers/moderator");

router.get("/", moderatorController.home);

router.get("/profile", moderatorController.profile);

router.get("/view/:post_id", moderatorController.getPost);

router.get("/verify/:post_id", moderatorController.verifyPost);

router.post("/comment", moderatorController.postComment);

router.get("/error/:post_id", moderatorController.warnPost);

module.exports = router;
