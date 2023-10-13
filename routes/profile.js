const path = require("path");

const express = require("express");

const usersProfileController = require("../controllers/userProfile");

const router = express.Router();

router.get("/profile", usersProfileController.profile);

router.get("/edit/:post_id", usersProfileController.getEdit);

router.get("/delete/:post_id", usersProfileController.getDelete);

router.get("/viewprofile/:user_id", usersProfileController.viewProfile);

router.get("/reqMod/:user_id", usersProfileController.requestMod);

router.post("/update-content", usersProfileController.postEdit);

module.exports = router;
