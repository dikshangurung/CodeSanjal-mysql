const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

router.get("/", adminController.home);

router.get("/view/:post_id", adminController.getPost);

router.get("/verify/:post_id", adminController.verifyPost);

router.get("/error/:post_id", adminController.warnPost);

router.get("/moderatorreq", adminController.getModeratorReq);

router.get("/approve/:user_id", adminController.approveMod);

module.exports = router;
