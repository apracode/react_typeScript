import { Todo } from "../types/Todo";
import { ADD, REMOVE, TOOGLE, AppActions } from "../types/actions";
import { Dispatch } from "redux";

export const addTodo = (todo: Todo): AppActions => ({
  type: ADD,
  todo
});

export const removeTodo = (id: number): AppActions => ({
  type: REMOVE,
  id
});

export const toogleTodo = (id: number): AppActions => ({
  type: TOOGLE,
  id
});

export const startAddTodo = (title: string): {} => {
  return (dispatch: Dispatch<AppActions>) => {
    const todo: Todo = {
      title: title,
      id: Date.now(),
      completed: false
    };
    dispatch(
      addTodo({
        ...todo
      })
    );
  };
};

export const startRemoveTodo = (id: number) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(removeTodo(id));
  };
};
export const startToogleTodo = (id: number) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(toogleTodo(id));
  };
};
