import React from "react";
import style from "../Todo/Todo.module.css";

export const Title = ({ title }) => {
  return (
    <h2 className={style.title}>{title}</h2>
  );
};