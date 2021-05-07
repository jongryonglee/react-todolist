import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { FcAddRow } from "react-icons/fc";
import { AiOutlineEnter } from "react-icons/ai";

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
    <InputGroup size="lg" className="inputForm" onSubmit={handleSubmit}>
      <FormControl
        placeholder="Edit ToDo"
        aria-label="Edit ToDo"
        value={input}
        onChange={handleChange}
      />
      <InputGroup.Append>
        <Button variant="success" onClick={handleSubmit}>
          <AiOutlineEnter className="svg" />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  ) : (
    <InputGroup size="lg" className="inputForm" onSubmit={handleSubmit}>
      <FormControl
        placeholder="Add ToDo"
        aria-label="Add ToDo"
        value={input}
        onChange={handleChange}
      />
      <InputGroup.Append>
        <Button variant="primary" onClick={handleSubmit}>
          <FcAddRow className="addRow" />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default Form;
