const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // Original values
  // app.use(express.static("client/build"));
  app.use(express.static("../client/build"));
}

// app.get("/", (req, res) => {
//   res.json({ status: "successful" });
// });

// mongodb+srv://marlee:<password>@cluster0-fgs8h.mongodb.net/mongo-crud?retryWrites=true&w=majority
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://marlee:D4DLoKtp1YvJz85d@cluster0-fgs8h.mongodb.net/mongo-crud?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// if you comment this back and uncomment above
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/index.html"));
// });

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});