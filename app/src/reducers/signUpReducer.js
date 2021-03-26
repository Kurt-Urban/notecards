import { ADD_USER } from "../actions/types";

const initalState = {
  userId: null,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export default (state = { initalState }, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userId: action.payload.userId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
