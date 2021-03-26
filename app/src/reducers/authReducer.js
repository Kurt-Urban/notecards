import { LOGGED_IN, LOGOUT } from "../actions/types";

const initalState = {
  isSignedIn: null,
  userId: null,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export default (state = { initalState }, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
      };
    case LOGOUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

// import { SIGN_IN, SIGN_OUT } from '../actions/types';

// const initalState = {
//     isSignedIn: null,
//     userId: null
// };

// export default (state = { initalState }, action) => {
//     switch (action.type) {
//         case SIGN_IN:
//             return { ...state, isSignedIn: true, userId: action.payload };
//         case SIGN_OUT:
//             return { ...state, isSignedIn: false, userId: null };
//         default:
//             return state;
//     }
// };
