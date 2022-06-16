import React from "react";
import style from "./Todo.module.css";
import { TodoInput } from "./TodoInput/TodoInput";
import { TodoFilter } from "./TodoFilter/TodoFilter";
import { TodoList } from "./TodoList/TodoList";

export const Todo = (props) => {
  const isTasksExist = props.todos && props.todos.length > 0;
  const filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      default: return tasks;
    }
  };
  const filteredTasks = filterTasks(props.todos, props.activeFilter);
  const getActiveTasks = (todos) => todos.filter(task => !task.isCompleted).length;


  return (
    <div className="todo-wrapper">
      <TodoInput addTask={props.addTask} taskText={props.taskText} updateText={props.updateText} />
      {isTasksExist && <TodoList completedTask={props.completedTask} todos={filteredTasks} />}
      {isTasksExist && <TodoFilter changeFilter={props.changeFilter} deleteCompletedTasks={props.deleteCompletedTasks} todos={props.todos} filter={props.filter} count={getActiveTasks(props.todos)} activeFilter={props.activeFilter} />}
    </div>
  );
};