// Imports
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

const http = require("http");
const server = http.createServer(app);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodyParser.json());
// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true
// }))

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/meetup", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});





app.use(bodyParser.urlencoded({ extended: true }));



app.use(routes);

//Server listener and Socket.io functionality
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

