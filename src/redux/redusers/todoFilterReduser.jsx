const CHANGE_FILTER = "CHANGE_FILTER";

const initialState = {
  filter: [
    {
      text: 'All',
      id: 'all',
    },
    {
      text: 'Active',
      id: 'active',
    },
    {
      text: 'Completed',
      id: 'completed'
    }
  ],
  activeFilter: 'all'
};

export const todoFilterReduser = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        activeFilter: action.activeFilter
      };
    default:
      return state;
  }
};

export const changeFilterActionCreator = (activeFilter) => {
  return { type: CHANGE_FILTER, activeFilter };
};