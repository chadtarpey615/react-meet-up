const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: { type: String, required: true },
    distance: { type: Number, required: true },
    date: { type: Date, default: Date.now }
})

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;