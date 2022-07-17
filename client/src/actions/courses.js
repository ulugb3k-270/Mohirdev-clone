import * as api from "../api";
import { GET_COURSES } from "../constants/actionTypes";

export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await api.getAllCourses();
    dispatch({ type: GET_COURSES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
