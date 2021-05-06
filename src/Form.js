import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Form({ addTodo, edit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return edit ? (
    <form onSubmit={handleSubmit}>
      <label>
        <input value={input} onChange={handleChange} />
      </label>
      <Button variant="primary" onClick={handleSubmit}>
        Edit todo
      </Button>
    </form>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>
        <input value={input} onChange={handleChange} />
      </label>
      <Button variant="primary" onClick={handleSubmit}>
        Add todo
      </Button>
    </form>
  );
}

export default Form;
