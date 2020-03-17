import React, { useRef, useEffect } from "react";
import "../index.css";
import { connect } from "react-redux";
import todos from "../reducers/todos";
import { startAddTodo } from "../actions/todos";

interface IToDoFormProps {
  // onAdd(title: string): void;
  startAddTodo(title: any): void;
  todos: any;
}

const ToDoForm: React.FC<IToDoFormProps> = props => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log(ref.current!.value);
      props.startAddTodo(ref.current!.value);
      ref.current!.value = "";
    }
  };

  useEffect(() => {
    // localStorage.setItem("todos", "lala");
    // localStorage.setItem("todos", "rere");
    // localStorage.setItem("todos", JSON.stringify(props.todos));
    // console.log("INIT", localStorage);
  }, [props.todos]);

  useEffect(() => {
    // const state = JSON.parse(localStorage.getItem("todos") || "[]");
    // setTodos(state);
    // console.log("State", state);
  }, [props.todos]);

  console.log("REdTo", props.todos);

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
      <label htmlFor="title" className="active">
        Enter task
      </label>
    </div>
  );
};
const mapStateToProps = (state: any, props: any) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: any, props: any) => ({
  startAddTodo: (title: any) => dispatch(startAddTodo(title))
});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
