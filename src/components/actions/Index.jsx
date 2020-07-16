export const add1 = (count) => ({
  type: 'ADD1',
  count,
});

export const remove1 = (count) => ({
  type: 'REMOVE1',
  count,
});

export const reset = (count) => ({
  type: 'RESET',
  count,
});

export const textField = (text) => ({
  type: 'ADDTEXT',
  text,
});

export const initChoice = (choice) => ({
  type: 'INITIAL_CHOICE',
  payload: choice,
});
