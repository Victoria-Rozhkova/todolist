import React from "react";
import style from "./TodoFilter.module.css";

export const TodoFilter = ({ count, filter, todos, activeFilter, deleteCompletedTasks, changeFilter }) => {
  const clearCompleted = () => {
    const activeTasks = todos.filter(task => {
      return task.isCompleted === false;
    });
    deleteCompletedTasks(activeTasks);
  };
  return (
    <div className="filter">
      <span className="count">{`${count} Tasks left`}</span>
      <div className="btn-group">
        {filter.map(({ text, id }) => (
          <button onClick={() => changeFilter(id)} key={id} className={id === activeFilter ? style.active : style.filterBtn}
          >{text}</button>
        ))}
      </div>
      <div><button onClick={clearCompleted}>Clear completed</button></div>
    </div>
  );
};