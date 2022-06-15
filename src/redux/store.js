import { combineReducers, legacy_createStore as createStore } from "redux";
import { todoFilterReduser } from "./redusers/todoFilterReduser";
import { todoInputReduser } from "./redusers/todoInputReduser";
import { todoReduser } from "./redusers/todoReduser";

let redusers = combineReducers({
  Todo: todoReduser,
  Filter: todoFilterReduser,
  Input: todoInputReduser,
});

let store = createStore(redusers);

export default store;
