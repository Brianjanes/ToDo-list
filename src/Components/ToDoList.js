import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>What's the plan?</h1>
      <ToDoForm onSubmit={addTodo} />
    </div>
  );
};

export default ToDoList;
