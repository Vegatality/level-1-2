import { createStore, combineReducers } from "redux";
import todo from "redux/modules/todo";

const rootReducer = combineReducers({
    todo,
});

const store = createStore(rootReducer);

export default store;
