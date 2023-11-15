import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to TravellioDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use('/api/user', userRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000!!!");
});
