const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController");

userRouter.get("/", userController.getAllUser);
userRouter.post("/", userController.postdata);

module.exports = userRouter;
