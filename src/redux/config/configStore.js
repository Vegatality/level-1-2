import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import todo from "redux/modules/todo";

// const rootReducer = combineReducers({
//     todo,
// });

// const store = createStore(rootReducer);

// export default store;

const store = configureStore({
    reducer: {
        todo: todo,
        // todo: {
        //     todo,
        // },
    },
});

export default store;
