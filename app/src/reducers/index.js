import { combineReducers } from "redux";
import authReducer from "./authReducer";
import noteListReducer from "./noteListReducer";
import signUpReducer from "./signUpReducer";

export default combineReducers({
  auth: authReducer,
  listNotes: noteListReducer,
  newUser: signUpReducer,
});
