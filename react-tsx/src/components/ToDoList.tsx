import React from "react";
import "../index.css";
import { connect } from "react-redux";
import { startRemoveTodo, startToogleTodo } from "../actions/todos";
import { Todo } from "../types/Todo";
import { AppState } from "../store/store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../types/actions";
import { bindActionCreators } from "redux";

type Props = LinkStateProps & LinkDispatchProps;

const ToDoList: React.FC<Props> = props => {
  if (props.todos.length === 0) {
    return <p className="center">You have nothing to do</p>;
  }

  return (
    <ul>
      {props.todos.map((todo: Todo) => {
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
                onChange={props.startToogleTodo.bind(null, todo.id)}
              />
              <span className="span">{todo.title}</span>
              <i
                className="material-icons red-text i"
                onClick={() => props.startRemoveTodo(todo.id)}
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
interface LinkStateProps {
  todos: Todo[];
}
interface LinkDispatchProps {
  startToogleTodo: (id: number) => void;
  startRemoveTodo: (id: number) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  todos: state.todos
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  startRemoveTodo: bindActionCreators(startRemoveTodo, dispatch),
  startToogleTodo: bindActionCreators(startToogleTodo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
