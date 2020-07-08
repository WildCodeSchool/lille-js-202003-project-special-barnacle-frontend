import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './App';
import counterReducer from './components/reducers/counterReducer';
import TextReducer from './components/reducers/TextReducer';
import BoolReducer from './components/reducers/BoolReducer';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2a96b0' },
    secondary: { main: '#91ba1e' },
    background: { main: '#edf1f5' },
  },
});

const rootReducer = combineReducers({
  counter: counterReducer,
  question: TextReducer,
  bool: BoolReducer,
});

const initialState = {
  counter: { count: 0 },
  question: {
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
  },
  bool: {
    bool1: false,
    bool2: '',
    bool3: '',
  },
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable no-underscore-dangle */

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
