const TextReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDTEXT':
      return { ...state, question1: action.text };
    default:
      return state;
  }
};

export default TextReducer;
