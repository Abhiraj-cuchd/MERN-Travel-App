import User from "../../Models/User.Model.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const newuser = new User({ username, email, password });

  const hashedPassword = await bcryptjs.hashSync(password, 10);
  newuser.password = hashedPassword;

  try {
    await newuser.save();
    res.status(201).json(newuser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
