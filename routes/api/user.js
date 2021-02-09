const router = require("express").Router();
const userController = require("../../controller/userController");
const User = require("../../models/users");

router.route("/new").post(userController.create);

module.exports = router;