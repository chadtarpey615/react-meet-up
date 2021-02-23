const router = require("express").Router();
const eventController = require("../../controller/eventController.js");


router.route("/:eventName")
    .post(eventController.saveEvent)
    .get(eventController.findAll);


router.route("/saved")
    .get(eventController.create);
module.exports = router;