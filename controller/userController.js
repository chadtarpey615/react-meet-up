const db = require("../models/");
const mongoose = require("mongoose");


module.exports = {
    findAll: function (req, res) {
        db.User.find(req.query)
            .sort({ date: -1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    findOne: function (req, res) {
        // console.log(req.params.username);
        // console.log("Find one function");
        db.User.findOne({ username: req.params.username })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log("controller")
        db.User.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    register: async function (req, res) {
        console.log(req.body);
        try {
            // Creates the hashedpasswords
            //   const hashedPassword = await bcrypt.hashSync(req.body.password, 10);

            //console.log(hashedPassword);
            db.User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
            }).then((userData) => {
                //console.log("Then");
                res.send(userData);
            });
        } catch (err) {
            res.send(err);
        }
    },
}