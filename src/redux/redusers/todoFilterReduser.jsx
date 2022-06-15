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
  ]
};

export const todoFilterReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state;
    default:
      return state;
  }
};