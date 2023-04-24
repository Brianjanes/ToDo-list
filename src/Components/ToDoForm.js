import React, { useState, useEffect, useRef } from "react";

const ToDoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Add a thing to do!"
            value={input}
            name="text"
            onChange={(e) => handleChange(e)}
            ref={inputRef}
            className="todo-input edit"
          ></input>
          <button className="todo-button">Edit Task</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a thing to do!"
            value={input}
            name="text"
            onChange={(e) => handleChange(e)}
            ref={inputRef}
            className="todo-input"
          ></input>
          <button className="todo-button">Add Task</button>
        </>
      )}
    </form>
  );
};

export default ToDoForm;
