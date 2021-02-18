const router = require("express").Router();
const userController = require("../../controller/userController");


router.route("/:eventName")
    .post(userController.saveEvent);

module.exports = router;