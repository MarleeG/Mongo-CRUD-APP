const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// mongodb+srv://<user>:<password>@cluster0-fgs8h.mongodb.net/mongo-crud?retryWrites=true&w=majority
// mongodb://heroku_dv0v87gv:ldeush022ljoseouqsfia1oh33@ds113942.mlab.com:13942/heroku_dv0v87gv
// encodeURIComponent(process.env.MONGO_ATLAS_PW);

// 2020-05-08T02:14:29.367251+00:00 app[web.1]:   MONGODB_URI: 'mongodb://heroku_dv0v87gv:ldeush022ljoseouqsfia1oh33@ds113942.mlab.com:13942/heroku_dv0v87gv',
console.log("PROCESS:: ", process.env);
const URI =
  process.env.MONGODB_URI ||
  "mongodb://heroku_dv0v87gv:password1@ds113942.mlab.com:13942/heroku_dv0v87gv";
mongoose.connect(
  URI,
  {
    user: "heroku_dv0v87gv",
    pass: "password1",
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useMongoClient: true,
  },
  function (err) {
    if (error) {
      console.log("err", error);
    } else {
      console.log("woohoo");
    }
  }
);

// mongoose.connect(URI, { server: { poolSize: 10 } }, function (error) {});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // Original values
  // app.use(express.static("client/build"));
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
  });
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
