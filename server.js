const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

const {DB_USER, DB_PASSWORD, DB} = process.env;

const URI = process.env.MONGODB_URI || `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.fgs8h.mongodb.net/${DB}?retryWrites=true&w=majority`;

const connect = async () => {
  try {
    await mongoose.connect(
      URI,
      {
        user: DB_USER,
        pass: DB_PASSWORD,
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
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