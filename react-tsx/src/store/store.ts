import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todosReducer from "../reducers/todos";
import { composeWithDevTools } from "redux-devtools-extension";
export const rootReducer = combineReducers({
  todos: todosReducer
});



export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
