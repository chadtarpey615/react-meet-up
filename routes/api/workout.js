const router = require("express").Router();
const userController = require("../../controller/userController");


router.route("/:email")
    .post(userController.saveEvent);

module.exports = router;