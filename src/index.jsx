import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import counterReducer from './components/reducers/counterReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

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
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
