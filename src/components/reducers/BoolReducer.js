const BoolReducer = (state = [], action) => {
  switch (action.type) {
    case 'BOOL_TRAVAUX':
      return { ...state, bool1: action.bool };
    default:
      return state;
  }
};

export default BoolReducer;
