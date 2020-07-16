const BoolReducer = (state = [], action) => {
  switch (action.type) {
    case 'INITIAL_CHOICE':
      return { ...state, choice: action.choice };
    default:
      return state;
  }
};

export default BoolReducer;
