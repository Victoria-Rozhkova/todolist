import React from "react";
import style from "./Todo.module.css";
import { TodoInput } from "./TodoInput/TodoInput";
import { TodoFilter } from "./TodoFilter/TodoFilter";
import { TodoList } from "./TodoList/TodoList";

export const Todo = (props) => {
  const isTasksExist = props.todos && props.todos.length > 0;
  return (
    <div className="todo-wrapper">
      <TodoInput addTask={props.addTask} taskText={props.taskText} updateText={props.updateText} />
      {isTasksExist && <TodoList completedTask={props.completedTask} todos={props.todos} />}
      {isTasksExist && <TodoFilter deleteCompletedTasks={props.deleteCompletedTasks} todos={props.todos} filter={props.filter} count={props.todos.length} activeFilter={props.activeFilter} />}
    </div>
  );
};