import Form from "./Form";
import Todo from "./Todo";
import React, { useState, useEffect } from "react";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const json = localStorage.getItem("todo");
    const loadedTodo = JSON.parse(json);
    if (loadedTodo) {
      setTodoList(loadedTodo);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todoList);
    localStorage.setItem("todo", json);
  }, [todoList]);

  const addTodo = (newTodo) => {
    if (!newTodo.text) {
      return;
    }

    setTodoList([newTodo, ...todoList]);
    console.log("addTodo");
  };

  const removeTodo = (id) => {
    setTodoList([...todoList].filter((todo) => todo.id !== id));
    console.log("removeTodo");
  };

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

  const updateTodo = (id, value) => {
    if (!value) {
      return;
    }

    setTodoList(todoList.map((todo) => (todo.id === id ? value : todo)));
    console.log("updateTodo");
  };

  return (
    <>
      <Form addTodo={addTodo} />
      <Todo
        todoList={todoList}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
