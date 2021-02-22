const router = require("express").Router();
const eventController = require("../../controller/eventController.js");


router.route("/:eventName")
    .post(eventController.saveEvent)
    .get(eventController.findAll);

module.exports = router;