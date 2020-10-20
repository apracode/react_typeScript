import React from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { startRemoveTodo, toogleTodo } from "../actions/todos";
import { Todo } from "../types/Todo";
import { AppState } from "../store/store";

const ToDoList: React.FC = () => {
  const todos = useSelector((state: AppState) => state.todos);
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return <p className="center">You have nothing to do</p>;
  }

  return (
    <ul>
      {todos.map((todo: Todo) => {
        const classes = ["toDo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li key={todo.id} className={classes.join(" ")}>
            <label className="lable" htmlFor={`${todo.id}`}>
              <input
                type="checkbox"
                id={`${todo.id}`}
                checked={todo.completed}
                onChange={() => dispatch(toogleTodo(todo.id))}
              />
              <span className="span">{todo.title}</span>
              <i
                className="material-icons red-text i"
                onClick={() => dispatch(startRemoveTodo(todo.id))}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
