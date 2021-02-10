const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api")
// var isAuth = require("../config/auth").isAuth;

router.use("/api", apiRoutes);
console.log(apiRoutes)

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;