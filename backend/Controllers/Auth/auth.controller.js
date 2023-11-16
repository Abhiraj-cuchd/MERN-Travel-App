import User from "../../Models/User.Model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../../Utils/error.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const newuser = new User({ username, email, password });

  const hashedPassword = await bcryptjs.hashSync(password, 10);
  newuser.password = hashedPassword;

  try {
    await newuser.save();
    res.status(201).json(newuser);
  } catch (error) {
    next(errorHandler(550, "Internal Server Error"));
  }
};

export const signIn = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const validUser = await User.findOne({ username });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = await bcryptjs.compareSync(
      password,
      validUser.password
    );
    if (!validPassword) {
      return next(errorHandler(401, "Incorrect Credentials"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res.cookie("access_token", token, { httpOnly: true, expires: new Date(Date.now() + 24 * 60 * 60) }).status(200).json({ rest });

  } catch (error) {
    next(error);
  }
};
