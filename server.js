const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

const URI =
  process.env.MONGODB_URI ||
  "mongodb://heroku_dv0v87gv:password1@ds113942.mlab.com:13942/heroku_dv0v87gv";

const connect = async () => {
  try {
    await mongoose.connect(
      URI,
      {
        user: "heroku_dv0v87gv",
        pass: "password1",
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      function (err) {
        if (err) {
          console.log("err", err);
        } else {
          console.log("woohoo");
        }
      }
    );
  } catch (err) {
    console.log("ERROR:: ", err);
  }
};

connect();


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