import React, { useState } from "react";
import "./todoApp.style.css";

const TodoApp = () => {
  const defaultTodoList = localStorage.getItem("Tomeks Todo List").split(",");
  const [todoList, setTodoList] = useState([...defaultTodoList]);
  const [newTodo, setNewTodo] = useState("");

  const onClickHandler = () => {
    if (newTodo.length > 0) {
      setTodoList([...todoList, newTodo]);
      localStorage.setItem("Tomeks Todo List", [...todoList, newTodo]);
      setNewTodo("");
    }
  };

  const onChangeHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const removeTodoHandler = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    localStorage.setItem("Tomeks Todo List", [...updatedList]);
    setTodoList(updatedList);
  };

  const showTodoList = todoList.map((el, index) => {
    return (
      <div className="single-todo">
        <p key={index}>{el}</p>
        <button onClick={() => removeTodoHandler(index)}>Delete</button>
      </div>
    );
  });

  return (
    <div className="todo-container">
      <div className="todo-box">
        <h1 className="title">Todo List</h1>
        <div className="todo-input">
          <input type="text" value={newTodo} onChange={onChangeHandler} />
          <button onClick={onClickHandler}>Add</button>
        </div>
        <h2 className="list-title">Your list:</h2>
        {showTodoList}
      </div>
    </div>
  );
};

export default TodoApp;
