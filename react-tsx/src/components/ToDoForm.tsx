import React, { useRef } from "react";
import "../index.css";

interface IToDoFormProps {
  onAdd(title: string): void;
}

const ToDoForm: React.FC<IToDoFormProps> = props => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAdd(ref.current!.value);
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
      <label htmlFor="title" className="active">
        Enter task
      </label>
    </div>
  );
};

export default ToDoForm;
