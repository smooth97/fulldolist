import express from "express";
import { json } from "body-parser";
import { todoRouter } from "./routes/todo";
import mongoose from "mongoose";

const app = express();
app.use(json());
app.use(todoRouter);

mongoose.connect(
  "mongodb://localhost:27017/todo",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to db");
  }
);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
