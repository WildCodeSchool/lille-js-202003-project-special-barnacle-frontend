// This reducer is for template purpose only

const TextReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOW':
      return {
        ...state,
        text: action.text,
      };

    default:
      return state;
  }
};
export default TextReducer;
