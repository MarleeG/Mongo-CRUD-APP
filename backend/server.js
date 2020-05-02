const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // Original values
  // app.use(express.static("client/build"));
  app.use(express.static("../client/build"));
}

app.get("/", (req, res) => {
  res.json({ status: "successful" });
});

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// if you comment this back and uncomment above then you must u
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
