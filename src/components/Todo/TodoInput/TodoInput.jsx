import React from "react";
import style from "./TodoInput.module.css";
import '../../../App.css';
import { useState } from "react";

export const TodoInput = ({ addTask }) => {
  const [textInput, setTextInput] = useState('');

  const onChangeText = (e) => {
    const text = e.target.value;
    setTextInput(text);
  };
  const addTaskHandler = ({ key }) => {
    if (key === 'Enter') {
      const id = new Date().getTime();
      addTask(id, textInput, false);
      setTextInput("");
    }
  };

  return (
    <div className={style.todoInputWrapper}>
      <input
        className={style.todoInput}
        placeholder="What needs to be done?"
        onChange={onChangeText}
        value={textInput}
        onKeyPress={addTaskHandler}
      />
      <i className="fas fa-chevron-down" />
    </div>);
};