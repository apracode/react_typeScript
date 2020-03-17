import React, { useState, useEffect } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import { ITodo } from "../interfaces";

declare var confirm: (question: string) => boolean;

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    // const state = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    // setTodos(state);
  }, []);

  useEffect(() => {
    // localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(localStorage);
  }, [todos]);

  const toogleHandler = (id: number) => {
    console.log("clicked");
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm(
      "Are you sure that you want to delete this task?"
    );
    if (shouldRemove) {
      setTodos(prev =>
        prev.filter(todo => {
          return todo.id !== id;
        })
      );
    }
  };

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    };
    setTodos(prev => [newTodo, ...todos]);
  };

  return (
    <React.Fragment>
      <ToDoForm onAdd={addHandler} />
      <ToDoList
        // todos={todos}
        onToogle={toogleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  );
};

export default TodoPage;
