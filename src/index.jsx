import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import counterReducer from './components/reducers/counterReducer';

import './index.css';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2a96b0' },
    secondary: { main: '#91ba1e' },
    background: { main: '#edf1f5' },
  },
});

const rootReducer = combineReducers({
  counter: counterReducer,
});

const initialState = {
  counter: { count: 0 },
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
