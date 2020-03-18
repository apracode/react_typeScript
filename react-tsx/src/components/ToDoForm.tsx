import React, { useRef } from "react";
import "../index.css";
import { connect } from "react-redux";
import { Todo } from "../types/Todo";
import { startAddTodo } from "../actions/todos";
import { AppState } from "../store/store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../types/actions";
import { bindActionCreators } from "redux";

type Props = LinkStateProps & LinkDispatchProps;

const ToDoForm: React.FC<Props> = props => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.startAddTodo(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        type="text"
        name=""
        id="title"
        placeholder="Enter task"
        onKeyPress={keyPress}
      />
    </div>
  );
};

interface LinkStateProps {
  todos: Todo[];
}
interface LinkDispatchProps {
  startAddTodo: (title: string) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  todos: state.todos
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  startAddTodo: bindActionCreators(startAddTodo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
