const router = require("express").Router();
const UserController = require("../../controller/userController");
const User = require("../../models/users");

router.route("/").post(UserController.create);