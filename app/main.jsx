'use strict'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './store';
import Root from './components/Root';
// import AllCampuses from './components/AllCampuses';
// import AllStudents from './components/AllStudents';
// import CampusContainer from './components/AllCampuses';

render (
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('main')
)