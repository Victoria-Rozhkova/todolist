import React from "react";
import style from "./TodoItem.module.css";
import '../../../App.css';

export const TodoItem = ({ text, isCompleted, completedTask, id }) => {
  return (
    <li className={style.todoItem}>
      <i onClick={() => completedTask(id)} className={isCompleted ? "far fa-check-circle" : "far fa-circle"} />
      <span onClick={() => completedTask(id)} className={isCompleted ? style.completed : style.todoText}>{text}</span>
    </li>
  );
};