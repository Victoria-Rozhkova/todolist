import React from "react";
import style from "./TodoInput.module.css";
import '../../../App.css';

export const TodoInput = ({ taskText, updateText, addTask }) => {

  const onChangeText = (e) => {
    const text = e.target.value;
    updateText(text);
  };
  const addTaskHandler = ({ key }) => {
    if (key === 'Enter') {
      const id = new Date().getTime();
      addTask(id, taskText, false);
      updateText("");
    }
  };

  return (
    <div className={style.todoInputWrapper}>
      <span> </span>
      <i className="fas fa-chevron-down" />
      <input
        className="todo-input"
        placeholder="What needs to be done?"
        onChange={onChangeText}
        value={taskText}
        onKeyPress={addTaskHandler}
      />
    </div>);
};