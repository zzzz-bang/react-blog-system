import React, { Component } from 'react'
// import BlogRouter from './router'
import BlogRouter from './router/index'
import {Provider} from 'react-redux'
import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BlogRouter></BlogRouter>
      </Provider>
    )
  }
}


