const router = require("express").Router();
const userRoutes = require("./user");
const workoutRoutes = require("./workout");

router.use("/user", userRoutes);
// console.log(userRoutes)

router.use("/workout", workoutRoutes)

module.exports = router;