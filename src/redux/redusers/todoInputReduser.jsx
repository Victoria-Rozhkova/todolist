const UPDATE_TEXT = "UPDATE_TEXT";

const initialState = {
  taskText: ""
};

export const todoInputReduser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        taskText: action.text
      };
    default:
      return state;
  }
};

export const updateTextActionCreator = (text) => {
  return { type: UPDATE_TEXT, text };
};