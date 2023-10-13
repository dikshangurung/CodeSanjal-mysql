const path = require("path");

const express = require("express");

const usersController = require("../controllers/users");

const router = express.Router();

router.get("/", usersController.home);

router.get("/post", usersController.post);

router.post("/post-content", usersController.post_content);

router.post("/comment", usersController.postComment);

router.get("/view/:post_id", usersController.getPost);

router.get("/upvote/:post_id", usersController.updateUpvote);

router.post("/search", usersController.getSearch);

router.get("/login", usersController.login);

router.get("/signup", usersController.signup);

module.exports = router;
