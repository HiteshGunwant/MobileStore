import React, { Component } from 'react'
import { Provider } from 'react-redux'

import RootScreen from './Containers/Root/RootScreen'

import configureStore from './Stores/configureStore'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    )
  }
}
