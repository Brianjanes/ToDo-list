import React, { useState } from "react";
import styled from "styled-components";

const ToDoForm = (props) => {
  const [input, setInput] = useState("");

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
    <Form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        placeholder="Add a thing to do!"
        value={input}
        name="text"
        onChange={(e) => handleChange(e)}
      ></FormInput>
      <Button>Add ToDo</Button>
    </Form>
  );
};

const Form = styled.form``;
const FormInput = styled.input``;
const Button = styled.button``;

export default ToDoForm;
