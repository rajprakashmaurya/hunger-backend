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
      error: true,
      message: error.message || error,
    });
  }
};

exports.postdata = async (req, res) => {
  try {
    const isuser = await User.findOne({ email: req.body.email });

    if (isuser)
      return res.status(400).json({
        error: true,
        message: "User already exists with this email",
      });

    const user = await User.create(req.body);
    console.log(user);
    return res.status(201).json({
      message: "user is created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message || error,
    });
  }
};
