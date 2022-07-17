import { courses } from "../data/courses.js";

export const working = (req, res) => res.status(200).json("router working");

export const getCourses = (req, res) => {
  try {
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).send(error);
  }
};
