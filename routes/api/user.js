const router = require("express").Router();
const userController = require("../../controller/userController");
const User = require("../../models/users");
const passport = require("../../config/passport.js")

router.route("/").post(userController.register);

router.route("/login").post((req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User exists");
        else {
            req.login(user, (err) => {
                if (err) throw err;
                //res.send("Success!!!");
                res.json(req.user);
                console.log(req.user);
            });
        }
    })(req, res, next);
});

module.exports = router;