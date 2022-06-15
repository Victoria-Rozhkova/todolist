import React from "react";
import style from "./TodoItem.module.css";
import '../../../App.css';

export const TodoItem = ({ text, isCompleted }) => {

  return (
    <li className={style.todoItem}>
      <i className={isCompleted ? "far fa-check-circle" : "far fa-circle"} />
      <span className={isCompleted ? style.completed : style.todoText}>{text}</span>
    </li>
  );
};