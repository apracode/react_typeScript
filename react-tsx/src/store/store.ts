import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import todosReducer from "../reducers/todos";
import { composeWithDevTools } from "redux-devtools-extension";
import { AppActions } from "../types/actions";

export const rootReducer = combineReducers({
  todos: todosReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))
);
