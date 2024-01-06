const express = require("express");
const Cors = require("cors");
const pool = require("./db.js");
const router = require("./routes.js");

const app = express();

// Using middlewares
app.use(Cors());
app.use(express.json());

// Routes
app.use("/api/v1", router);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
