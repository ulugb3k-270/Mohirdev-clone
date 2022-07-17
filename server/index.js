import express from "express";
import mongoose from "mongoose";
import courses from "./routes/courses.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(cors());
app.get("/", (req, res) => res.status(200).json("WORKING"));
app.use("/courses", courses);

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log("LISTENING PORT " + PORT));
