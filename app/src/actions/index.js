import { FETCH_NOTES, SIGN_IN, SIGN_OUT } from "./types"
import notes from '../apis/notes';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}
export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const fetchNotes = () => async dispatch => {
    const response = await notes.get('/notes');
    dispatch({ type: FETCH_NOTES, payload: response.data });
};
