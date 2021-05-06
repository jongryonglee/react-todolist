import React, { useState } from "react";

function Form({ addTodo, edit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
  };

  //change

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return edit ? (
    <form onSubmit={handleSubmit}>
      <label>
        <input value={input} onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Edit todo</button>
    </form>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>
        <input value={input} onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Add todo</button>
    </form>
  );
}

export default Form;
