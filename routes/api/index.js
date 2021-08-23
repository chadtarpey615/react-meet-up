const router = require("express").Router();
const userRoutes = require("./user");
const workoutRoutes = require("./workout");

router.use("/user", userRoutes);


router.use("/workout", workoutRoutes)

module.exports = router;