import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import Home from './home/Home';

import store from './store';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Routing = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/"  component={Home}/>
      </div>
    </Router>
  </Provider>

)

ReactDOM.render(
  <Routing/>,
  document.getElementById('root')
);
