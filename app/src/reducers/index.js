import { combineReducers } from 'redux';
import authReducer from './authReducer';
import noteListReducer from './noteListReducer';

export default combineReducers({
    auth: authReducer,
    listNotes: noteListReducer
});