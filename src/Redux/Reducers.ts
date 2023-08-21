import { combineReducers } from "redux";
import { toggleReducer } from "./modules/toggle";

export const rootReducer = combineReducers({
  toggle: toggleReducer,
});
