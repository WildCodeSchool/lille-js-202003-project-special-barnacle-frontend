const initial = {
  curStep: 1,
  question1: '',
  question2: '',
  question3: '',
  question4: '',
  question4a: '',
  question5: '',
  question5a: '',
  question5b: '',
  question5bis: '',
  question5bisa: '',
  question5bisb: '',
  question6: '',
  question7: '',
  question7a: '',
  question7b: '',
  question8: '',
  question8a: '',
  question9: '',
  question10: '',
  question10a: '',
  question10b: '',
  question11: '',
  question12: '',
  question14: '',
  question15: '',
  question16: '',
  question16a: '',
  question16b: '',
  question17: '',
  question18: '',
  question18a: '',
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
