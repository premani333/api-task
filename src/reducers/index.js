import users from "./users";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: users,
  posts: users,
});

export default rootReducer;
