'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import AddStudent from './components/AddStudent'
import store from './store'
import Root from './components/Root'

render (
  <Provider store={store}>
    <AddStudent/>
  </Provider>,
  document.getElementById('main')
)