const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./Router");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.use("/", router);

const connectDb = async (req, res) => {
  await mongoose.connect("mongodb://localhost:27017/hungerApi");
  console.log("database is connected");
};

app.listen(3000, () => {
  console.log("listening on port 3000");
  connectDb();
});
