import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import reducers from './reducers';
import Header from './components/header';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
serviceWorker.register();