const User = require("../models/userModel");

exports.getAllUser = async (req, res) => {
  try {
    //console.log(req.body);
    const user = await User.find();
    return res.status(200).json({
      message: "all users found",
      totalUser: user.length,
      user: user,
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
      message: error.message || error,
    });
  }
};

exports.postdata = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).json({
      message: "user is created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
      message: error.message || error,
    });
  }
};
