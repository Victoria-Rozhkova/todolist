import React from "react";
import { connect } from "react-redux";
import { Todo } from "../components/Todo/Todo";
import { updateTextActionCreator } from "../redux/redusers/todoInputReduser";
import { addTaskActionCreator, deleteCompletedTasksActionCreator, setIsCompletedActionCreator } from "../redux/redusers/todoReduser";

const MapStateToProps = (state) => {
  return {
    taskText: state.Input.taskText,
    todos: state.Todo.todos,
    activeFilter: state.Filter.activeFilter,
    filter: state.Filter.filter
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    updateText: (text) => { dispatch(updateTextActionCreator(text)); },
    addTask: (id, text, isCompleted) => { dispatch(addTaskActionCreator(id, text, isCompleted)); },
    deleteCompletedTasks: (activeTasks) => { dispatch(deleteCompletedTasksActionCreator(activeTasks)); },
  };
};

export const TodoContainer = connect(MapStateToProps, MapDispatchToProps)(Todo);


