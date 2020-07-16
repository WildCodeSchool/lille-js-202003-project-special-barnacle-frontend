const counterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD1':
      return { ...state, activeStep: +1 };
    case 'REMOVE1':
      return { ...state, activeStep: -1 };

    case 'RESET':
      return { ...state, count: 3 };
    default:
      return state;
  }
};

export default counterReducer;
