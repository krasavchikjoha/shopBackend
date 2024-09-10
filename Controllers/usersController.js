import { userModel } from "../Models/userModel";

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find().select("username");
    res.status(200).json({
      status: "success",
      data: { users },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
export const createUser = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    res.status(200).json({
      status: "success",
      data: { newUser },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await userModel.find({
      username: req.body.username,
      password: req.body.password,
    });
    console.log(user);

    if (user.length != 0) {
      res.status(200).json({
        status: "success",
        data: { user },
      });
    } else {
      res.status(404).json({
        status: "fail",
        data: null,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
