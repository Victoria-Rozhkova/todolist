const ADD_TASK = "ADD_TASK";
const DELETE_COMPLETED_TASKS = "DELETE_COMPLETED_TASKS";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Тестовое задание",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Прекрасный код",
      isCompleted: true,
    }, {
      id: 3,
      text: "Покрытие тестами",
      isCompleted: false,
    },
  ],
  activeFilter: "all",

};

export const todoReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: action.id,
        text: action.text,
        isCompleted: action.isCompleted,
      };
      let stateCopy = { ...state };
      stateCopy.todos = [...state.todos];
      stateCopy.todos.push(newTask);
      return stateCopy;
    case DELETE_COMPLETED_TASKS:
      return {
        ...state,
        ...state.todos,
        todos: action.activeTasks
      };
    default:
      return state;
  }
};

export const addTaskActionCreator = (id, text, isCompleted) => {
  return { type: ADD_TASK, id, text, isCompleted };
};
export const deleteCompletedTasksActionCreator = (activeTasks) => {
  return { type: DELETE_COMPLETED_TASKS, activeTasks };
};