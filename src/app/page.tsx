"use client";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "todo 1", completed: false },
    { todoText: "todo 2", completed: true },
    { todoText: "todo 3", completed: true },
    { todoText: "todo 4", completed: false },
  ]);

  const onClickHandler = (meraElm: any) => {
    console.log("meraElm", meraElm);


    const newTodos = todos.map((todo) => {
      console.log("todo: ", todo);
      if (todo.todoText == meraElm.todoText) {
        todo.completed = !todo.completed; 
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);
  };
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>Todo</div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
        <input
          style={{ padding: "10px", marginRight: "10px", borderRadius: "5px", border: "1px solid gray", flex: "1" }}
          placeholder="add todo text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button style={{ margin: "20px", padding: "10px", backgroundColor: "blue", color: "white", borderRadius: "5px", border: "none" }} onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: elm.completed ? "green" : "orange",
                fontStyle: "oblique",
                listStyle: "none",
              }}
              key={elm.todoText}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={elm.completed}
                  onChange={() => {
                    onClickHandler(elm);
                  }}
                />
                <span style={{ marginLeft: "10px" }}>{elm.todoText}</span>
              </div>
              <button
                style={{ margin: "10px", padding: "5px", backgroundColor: "red", color: "white", borderRadius: "5px", border: "none" }}
                onClick={() => {
                  deleteTodo(elm);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
