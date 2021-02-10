const router = require("express").Router();
const userController = require("../../controller/userController");
const User = require("../../models/users");

router.route("/").post(userController.create);

router.route("/login").post((req, res) => {
    if (err) throw err;
    else {
        userController.findOne(
            {
                email: email
            },
            req.login(user, (err) => {
                res.json(req.user)
                console.log(req.user)
            })
        )
    }
})

module.exports = router;