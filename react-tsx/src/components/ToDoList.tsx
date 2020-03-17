import React from "react";
import "../index.css";

import { ITodo } from "../interfaces";
import { connect } from "react-redux";
import { startAddTodo } from "../actions/todos";

type ToDoListProps = {
  // todos: ITodo[];
  todos: any;
  onToogle(id: number): void;
  onRemove: (id: number) => void;
};

const ToDoList: React.FC<ToDoListProps> = ({ todos, onRemove, onToogle }) => {
  if (todos.length === 0) {
    return <p className="center">You have nothing to do</p>;
  }

  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {todos.map((todo: any) => {
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
                onChange={onToogle.bind(null, todo.id)}
              />
              <span className="span">{todo.title}</span>
              <i
                className="material-icons red-text i"
                onClick={event => removeHandler(event, todo.id)}
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

const mapStateToProps = (state: any, props: any) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: any, props: any) => ({
  startAddTodo: (title: any) => dispatch(startAddTodo(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
