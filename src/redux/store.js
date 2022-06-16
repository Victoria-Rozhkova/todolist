import { combineReducers, legacy_createStore as createStore } from "redux";
import { todoFilterReduser } from "./redusers/todoFilterReduser";
import { todoReduser } from "./redusers/todoReduser";

let redusers = combineReducers({
  Todo: todoReduser,
  Filter: todoFilterReduser,
});

let store = createStore(redusers);

export default store;
