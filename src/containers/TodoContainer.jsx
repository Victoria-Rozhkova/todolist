import { connect } from "react-redux";
import { Todo } from "../components/Todo/Todo";
import { changeFilterActionCreator } from "../redux/redusers/todoFilterReduser";
import { addTaskActionCreator, completedTaskActionCreator, deleteCompletedTasksActionCreator } from "../redux/redusers/todoReduser";

const MapStateToProps = (state) => {
  return {
    todos: state.Todo.todos,
    activeFilter: state.Filter.activeFilter,
    filter: state.Filter.filter
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    addTask: (id, text, isCompleted) => { dispatch(addTaskActionCreator(id, text, isCompleted)); },
    deleteCompletedTasks: (activeTasks) => { dispatch(deleteCompletedTasksActionCreator(activeTasks)); },
    completedTask: (id) => { dispatch(completedTaskActionCreator(id)); },
    changeFilter: (activeFilter) => { dispatch(changeFilterActionCreator(activeFilter)); },
  };
};

export const TodoContainer = connect(MapStateToProps, MapDispatchToProps)(Todo);


