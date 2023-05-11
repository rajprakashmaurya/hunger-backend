const express = require("express");
const userRouter = require("./userRouter");
const router = express.Router();

router.use("/login", userRouter);

module.exports = router;
