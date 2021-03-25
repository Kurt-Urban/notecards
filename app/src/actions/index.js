import { ADD_USER, FETCH_NOTES, LOGIN, LOGOUT } from "./types";
import notes from '../apis/notes';

export const login = user => ({ type: LOGIN, payload: { user } });

export const logout = () => ({ type: LOGOUT });

export const addUser = formValues => async dispatch => {
    const { userId } = Math.floor(Math.random() * 1000000);
    const response = await notes.post('/users', { ...formValues, userId });
    dispatch({ type: ADD_USER, payload: response.data });
    console.log(response.data)
}

export const fetchNotes = () => async dispatch => {
    const response = await notes.get('/notes');
    dispatch({ type: FETCH_NOTES, payload: response.data });
};

export const createNotes = formValues => async dispatch => {
    const { userId } = 1;
    const response = await notes.post('/notes', { ...formValues, userId });
}

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