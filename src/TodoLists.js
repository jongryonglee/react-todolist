import Form from "./Form";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function TodoLists() {
  const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const Checkbox = ({ onClick, defaultChecked }) => (
    <input
      type="checkbox"
      class="option-input checkbox"
      onClick={onClick}
      defaultChecked={defaultChecked}
    />
  );

  //call todoList from local storage
  useEffect(() => {
    const json = localStorage.getItem("todo");
    const loadedTodo = JSON.parse(json);
    if (loadedTodo) {
      setTodoList(loadedTodo.filter((todo) => todo.isComplete !== true));
    }
    console.log("Data called");
  }, []);

  //set todoList to local storage
  useEffect(() => {
    const json = JSON.stringify(todoList);
    localStorage.setItem("todo", json);
    console.log("Data saved");
  }, [todoList]);

  //add a new todo task
  const addTodo = (newTodo) => {
    if (!newTodo.text) {
      return;
    }

    setTodoList([newTodo, ...todoList]);
    console.log("addTodo");
  };

  // remove a todo task
  const removeTodo = (id) => {
    setTodoList([...todoList].filter((todo) => todo.id !== id));
    console.log("removeTodo");
  };

  // check a completed task which is selected
  const completeTodo = (id) => {
    let updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodoList(updatedTodoList);
    console.log("completeTodo");
  };

  // update a todo task
  const updateTodo = (input) => {
    if (!input) {
      return;
    }

    setTodoList(todoList.map((todo) => (todo.id === edit.id ? input : todo)));
    console.log("updateTodo");

    setEdit({
      id: null,
      value: "",
    });
  };

  // call form when edit.id !== null
  if (edit.id) {
    return <Form edit={edit} addTodo={updateTodo} />;
  }

  return (
    <div className="containerAll">
      <Form addTodo={addTodo} />

      {todoList.map((todo, index) => (
        <div className="container" key={index}>
          <Checkbox
            onClick={() => {
              completeTodo(todo.id);
            }}
            defaultChecked={todo.isComplete}
          />

          <div className="list" key={todo.id}>
            {todo.text}
          </div>

          <Button
            variant="success"
            onClick={() => {
              setEdit({ id: todo.id, value: todo.text });
            }}
          >
            Edit
          </Button>

          <Button
            variant="danger"
            onClick={() => removeTodo(todo.id)}
            className="removeButton"
          >
            X
          </Button>
        </div>
      ))}
    </div>
  );
}

export default TodoLists;
