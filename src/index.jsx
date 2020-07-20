import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import Reducer from './components/reducers/Reducer';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2a96b0' },
    secondary: { main: '#91ba1e' },
    background: { main: '#edf1f5' },
  },
});

const rootReducer = combineReducers({
  question: Reducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
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
