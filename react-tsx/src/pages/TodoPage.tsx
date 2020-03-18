import React from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

const TodoPage: React.FC = () => {
  return (
    <React.Fragment>
      <ToDoForm />
      <ToDoList />
    </React.Fragment>
  );
};

export default TodoPage;
