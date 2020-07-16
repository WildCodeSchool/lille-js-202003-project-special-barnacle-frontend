const initial = {
  curStep: 1,
  question1: '',
  question2: '',
  question3: '',
  question4: '',
  question5: '',
  question6: '',
  question7: '',
  question8: '',
  question9: '',
  question10: '',
};

const Reducer = (state = initial, action) => {
  switch (action.type) {
    case 'ANSWER':
      return { ...state, [action.question]: action.text };
    case 'SETSTEP':
      return { ...state, curStep: action.value };
    default:
      return state;
  }
};

export default Reducer;
