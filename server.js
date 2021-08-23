const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


mongoose.connect('mongodb://localhost:27017/Meet-Up',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.use(
    session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);

app.use(cookieParser("secretcode"));
const passport = require("./config/passport.js");
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    // console.log('req.session', req.session);
    //console.log("user");
    //console.log(req.session.cookie);
    return next();
});

app.use(routes);

app.use((req, res, next) => {
    console.log('req.session', req.session);
    //console.log("user");
    //console.log(req.session.cookie);
    return next();
});

app.listen(PORT, function () {
    console.log(` API Server now listening on port ${PORT}!`);
})