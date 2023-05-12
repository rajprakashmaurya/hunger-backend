const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController");

userRouter.get("/user", userController.getAllUser);
userRouter.post("/login", userController.postdata);

module.exports = userRouter;
