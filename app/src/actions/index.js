import { ADD_USER, FETCH_NOTES, LOGGED_IN, LOGOUT } from "./types";
import notes from "../apis/notes";
import history from "../history";

export const login = (input) => async (dispatch) => {
  const response = await notes.get("/users", {
    params: {
      email: input.email,
      password: input.password,
    },
  });
  const user = response.data?.[0];
  if (user) {
    history.push("/");
    dispatch({
      type: LOGGED_IN,
      payload: user,
    });
    console.log(user);
  }
};

export const logout = () => ({ type: LOGOUT });

export const addUser = (input) => async (dispatch) => {
  // const { userId } = Math.floor(Math.random() * 1000000);
  const response = await notes.post("/users", {
    ...input,
    // params: {
    //   email: input.email,
    //   password: input.password,
    //   firstName: input.firstName,
    //   lastName: input.lastName,
    // userId: userId,
    // },
  });
  dispatch({ type: ADD_USER, payload: response.data?.[0] });
  console.log(response);
};

export const fetchNotes = () => async (dispatch) => {
  const response = await notes.get("/notes");
  dispatch({ type: FETCH_NOTES, payload: response.data });
};

export const createNotes = (formValues) => async (dispatch) => {
  const { userId } = 1;
  const response = await notes.post("/notes", { ...formValues, userId });
};

// REMOVED
// export const signIn = userId => {
//     return {
//         type: SIGN_IN,
//         payload: userId
//     }
// }
// export const signOut = () => {
//     return {
//         type: SIGN_OUT
//     }
// }
