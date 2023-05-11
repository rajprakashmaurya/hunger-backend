const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to the login router",
  });
});

module.exports = userRouter;
