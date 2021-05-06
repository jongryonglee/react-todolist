import React, { useState } from "react";
import Form from "./Form";

function Todo({ todoList, removeTodo, completeTodo, updateTodo }) {
  const Checkbox = ({ onClick, defaultChecked }) => (
    <input type="checkbox" onClick={onClick} defaultChecked={defaultChecked} />
  );

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
    console.log("submitUpdate");
  };

  if (edit.id) {
    return <Form edit={edit} addTodo={submitUpdate} />;
  }

  return todoList.map((todo, index) => (
    <div className="container" key={index}>
      <Checkbox
        onClick={() => {
          completeTodo(todo.id);
        }}
        defaultChecked={todo.isComplete}
      />
      <div key={todo.id}>{todo.text}</div>
      <button onClick={() => removeTodo(todo.id)} className="removeButton">
        X
      </button>
      <button
        onClick={() => {
          setEdit({ id: todo.id, value: todo.text });
        }}
      >
        Edit
      </button>
    </div>
  ));
}

export default Todo;
