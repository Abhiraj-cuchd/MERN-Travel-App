import User from "../../Models/User.Model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../../Utils/error.js";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const newuser = new User({ username, email, password });

  const hashedPassword = await bcryptjs.hashSync(password, 10);
  newuser.password = hashedPassword;

  try {
    await newuser.save();
    res.status(201).json(newuser);
  } catch (error) {
    next(errorHandler(550, 'Internal Server Error'));
  }
};
