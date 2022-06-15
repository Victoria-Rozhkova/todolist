import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import style from "./TodoList.module.css";

export const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map(({ id, text, isCompleted }) => (
        <TodoItem key={id} text={text} isCompleted={isCompleted} />
      ))}
    </ul>
  );
};