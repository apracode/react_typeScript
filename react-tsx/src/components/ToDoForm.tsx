import React from "react";
import "../index.css";

import useInput from "../hooks/useInput";

const ToDoForm: React.FC = () => {
  const [ref, keyPress]: any[] = useInput();

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

export default ToDoForm;
