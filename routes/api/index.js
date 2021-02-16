const router = require("express").Router();
const userRoutes = require("./user");
const workoutRoutes = require("./workout");

router.use("/user", userRoutes);
// console.log(userRoutes)

router.use("/calendar", workoutRoutes)

module.exports = router;