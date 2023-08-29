import { combineReducers } from "redux";
import { toggleReducer } from "./modules/toggle";
import { counterReducer } from "./modules/Counter";
import { inputReducer } from "./modules/input";
import { todoReducer } from "./modules/todo";

export const rootReducer = combineReducers({
  toggle: toggleReducer,
  counter: counterReducer,
  input: inputReducer,
  todo: todoReducer,
});
