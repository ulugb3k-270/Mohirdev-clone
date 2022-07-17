import axios from "axios";
// const API = axios.create({ baseURL: "http://localhost:9000" });
const API = axios.create({ baseURL: "https://mohirdev-clone-server.herokuapp.com/" });

export const getAllCourses = () => API.get(`/courses/get-all`);
