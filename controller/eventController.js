const db = require("../models/");

module.exports = {
    findAll: function (req, res) {
        db.Workout.find(req.query)
            .sort({ date: -1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Workout.findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    findOne: function (req, res) {
        console.log(req.params.username);
        console.log("getting event");
        db.Workout.findOne({ username: req.params.username })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        // console.log("controller")
        db.Workout.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    register: async function (req, res) {
        console.log(req);
        try {
            // Creates the hashedpasswords
            const hashedPassword = await bcrypt.hashSync(req.body.password, 10);

            // console.log(hashedPassword);

            db.Workout.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hashedPassword,
            }).then((userData) => {
                //console.log("Then");
                res.send(userData);
            });
        } catch (err) {
            res.send(err);
        }
    },

    saveEvent: function (req, res) {
        // console.log("saving event")
        db.Workout.create({
            name: req.body.name,
            distance: req.body.distance,
            date: req.body.date
        }).then((userData) => {
            res.send(userData);
        })
            .catch((err) => console.log(err))
    }
}