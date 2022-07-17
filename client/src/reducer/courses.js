import { GET_COURSES } from "../constants/actionTypes";

const initialState = {
  allCourses: {}
}

export const courses = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        allCourses: action.payload
      }

    default:
      return { ...state };
  }
};
