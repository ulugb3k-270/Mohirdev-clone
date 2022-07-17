import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:9000" });

export const getAllCourses = () => API.get(`/courses/get-all`);
